import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getConsoleBuffer, clearConsoleBuffer, type ConsoleLogEntry } from "@/utils/consoleBuffer";
import {
  redactWithStats,
  mergeCounts,
  LABEL_PT,
  type RedactionCounts,
  type RedactionLabel,
} from "@/utils/redact";

interface CapturedError {
  id: string;
  time: string;
  type: string;
  message: string;
  source?: string;
  lineno?: number;
  colno?: number;
  stack?: string;
  url: string;
  userAgent: string;
}

const ERROR_STORAGE_KEY = "global-error-reports";
const ADMIN_HASH_KEY = "diagnostico-admin-hash";
const ADMIN_SALT_KEY = "diagnostico-admin-salt";

function loadErrors(): CapturedError[] {
  try {
    const raw = window.localStorage.getItem(ERROR_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getEnvInfo() {
  const env = import.meta.env;
  return {
    mode: env.MODE,
    dev: env.DEV,
    prod: env.PROD,
    baseUrl: env.BASE_URL,
    buildTime: (env.VITE_BUILD_TIME as string | undefined) ?? "n/a",
    commit: (env.VITE_COMMIT_SHA as string | undefined) ?? "n/a",
    url: typeof window !== "undefined" ? window.location.href : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    language: typeof navigator !== "undefined" ? navigator.language : "",
    platform: typeof navigator !== "undefined" ? navigator.platform : "",
    viewport:
      typeof window !== "undefined"
        ? `${window.innerWidth}x${window.innerHeight} (dpr=${window.devicePixelRatio})`
        : "",
    online: typeof navigator !== "undefined" ? navigator.onLine : true,
    timestamp: new Date().toISOString(),
  };
}

async function sha256Hex(input: string): Promise<string> {
  const buf = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function randomSalt(): string {
  const a = new Uint8Array(16);
  crypto.getRandomValues(a);
  return Array.from(a).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default function Diagnostico() {
  const [errors, setErrors] = useState<CapturedError[]>([]);
  const [logs, setLogs] = useState<ConsoleLogEntry[]>([]);
  const [env, setEnv] = useState(getEnvInfo);
  const [copied, setCopied] = useState(false);
  const [mask, setMask] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  // Admin
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [adminPromptOpen, setAdminPromptOpen] = useState(false);
  const [adminPwd, setAdminPwd] = useState("");
  const [adminPwd2, setAdminPwd2] = useState("");
  const [adminErr, setAdminErr] = useState<string | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);

  const refresh = () => {
    setErrors(loadErrors());
    setLogs(getConsoleBuffer());
    setEnv(getEnvInfo());
  };

  useEffect(() => {
    refresh();
    const id = window.setInterval(refresh, 2000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setNeedsSetup(!window.localStorage.getItem(ADMIN_HASH_KEY));
  }, [adminPromptOpen]);

  const last = errors[0];
  const effectiveMask = mask && !adminUnlocked;

  // Constrói payload de texto respeitando o modo atual
  const { payloadText, counts } = useMemo(() => {
    const lines: string[] = [];
    let totalCounts: RedactionCounts = {};

    const push = (raw: string) => {
      if (effectiveMask) {
        const { text, counts: c } = redactWithStats(raw);
        totalCounts = mergeCounts(totalCounts, c);
        lines.push(text);
      } else {
        lines.push(raw);
      }
    };

    lines.push(`Diagnóstico Folheando Fé — ${new Date().toLocaleString("pt-BR")}`);
    lines.push(`Mascaramento: ${effectiveMask ? "ATIVADO" : "DESATIVADO (modo admin)"}`);
    lines.push("");
    lines.push("== Ambiente ==");
    Object.entries(env).forEach(([k, v]) => push(`${k}: ${String(v)}`));
    lines.push("");
    lines.push("== Último erro ==");
    if (last) {
      push(`Tipo: ${last.type}`);
      push(`Quando: ${last.time}`);
      push(`Mensagem: ${last.message}`);
      if (last.source) push(`Local: ${last.source}:${last.lineno}:${last.colno}`);
      push(`URL: ${last.url}`);
      lines.push("Stack:");
      push(last.stack ?? "(sem stack)");
    } else {
      lines.push("(nenhum erro registrado)");
    }
    lines.push("");
    lines.push(`== Histórico de erros (${errors.length}) ==`);
    errors.forEach((e, i) => push(`#${i + 1} [${e.time}] (${e.type}) ${e.message}`));
    lines.push("");
    lines.push(`== Console (${logs.length}) ==`);
    logs.forEach((l) => push(`[${l.time}] [${l.level.toUpperCase()}] ${l.message}`));

    return { payloadText: lines.join("\n"), counts: totalCounts };
  }, [env, last, errors, logs, effectiveMask]);

  const totalRedactions = Object.values(counts).reduce((a, b) => a + (b ?? 0), 0);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(payloadText);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = payloadText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const downloadJson = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      masked: effectiveMask,
      redactionCounts: effectiveMask ? counts : {},
      env: effectiveMask
        ? Object.fromEntries(
            Object.entries(env).map(([k, v]) => [k, redactWithStats(String(v)).text]),
          )
        : env,
      lastError: last
        ? effectiveMask
          ? {
              ...last,
              message: redactWithStats(last.message).text,
              source: last.source ? redactWithStats(last.source).text : last.source,
              url: redactWithStats(last.url).text,
              stack: last.stack ? redactWithStats(last.stack).text : last.stack,
              userAgent: redactWithStats(last.userAgent).text,
            }
          : last
        : null,
      errors: effectiveMask
        ? errors.map((e) => ({ ...e, message: redactWithStats(e.message).text }))
        : errors,
      logs: effectiveMask
        ? logs.map((l) => ({ ...l, message: redactWithStats(l.message).text }))
        : logs,
      payloadText,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const stamp = new Date().toISOString().replace(/[:.]/g, "-");
    a.href = url;
    a.download = `diagnostico-${effectiveMask ? "mascarado" : "completo"}-${stamp}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    try {
      window.localStorage.removeItem(ERROR_STORAGE_KEY);
    } catch {
      /* ignore */
    }
    clearConsoleBuffer();
    refresh();
  };

  const openAdminPrompt = () => {
    setAdminErr(null);
    setAdminPwd("");
    setAdminPwd2("");
    setNeedsSetup(!window.localStorage.getItem(ADMIN_HASH_KEY));
    setAdminPromptOpen(true);
  };

  const submitAdmin = async () => {
    setAdminErr(null);
    if (needsSetup) {
      if (adminPwd.length < 6) {
        setAdminErr("A senha precisa ter ao menos 6 caracteres.");
        return;
      }
      if (adminPwd !== adminPwd2) {
        setAdminErr("As senhas não coincidem.");
        return;
      }
      const salt = randomSalt();
      const hash = await sha256Hex(salt + ":" + adminPwd);
      window.localStorage.setItem(ADMIN_SALT_KEY, salt);
      window.localStorage.setItem(ADMIN_HASH_KEY, hash);
      setAdminUnlocked(true);
      setAdminPromptOpen(false);
      return;
    }
    const salt = window.localStorage.getItem(ADMIN_SALT_KEY) ?? "";
    const expected = window.localStorage.getItem(ADMIN_HASH_KEY);
    const hash = await sha256Hex(salt + ":" + adminPwd);
    if (hash === expected) {
      setAdminUnlocked(true);
      setAdminPromptOpen(false);
    } else {
      setAdminErr("Senha incorreta.");
    }
  };

  const resetAdminPassword = () => {
    if (!window.confirm("Redefinir senha do modo admin? A senha atual será apagada deste navegador.")) return;
    window.localStorage.removeItem(ADMIN_HASH_KEY);
    window.localStorage.removeItem(ADMIN_SALT_KEY);
    setAdminUnlocked(false);
    setNeedsSetup(true);
    setAdminErr("Senha removida. Defina uma nova para continuar.");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#1a0f3d",
        color: "#f3ecdb",
        fontFamily: "'Montserrat', system-ui, sans-serif",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: "1.5rem" }}>
          <h1 style={{ fontFamily: "'Lora', serif", color: "#c19935", fontSize: "2rem", margin: 0 }}>
            Diagnóstico
          </h1>
          <p style={{ opacity: 0.8, marginTop: 6 }}>
            Último erro, console capturado e informações do ambiente da build.
          </p>
          {adminUnlocked && (
            <p
              style={{
                marginTop: 8,
                padding: "6px 10px",
                background: "rgba(193,153,53,0.15)",
                border: "1px solid #c19935",
                borderRadius: 6,
                fontSize: "0.82rem",
                color: "#ffe7a1",
              }}
            >
              🔓 Modo admin ativo — dados sensíveis visíveis. Isto é apenas ofuscação de UI; qualquer pessoa
              com acesso a este navegador ou ao bundle JS pode ver os mesmos dados.
            </p>
          )}
        </header>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1rem" }}>
          <button onClick={copyAll} style={btn("#c19935", "#1a0f3d")}>
            {copied ? "Copiado ✓" : effectiveMask ? "Copiar (mascarado)" : "Copiar (completo)"}
          </button>
          <button onClick={downloadJson} style={btn("transparent", "#f3ecdb", "1px solid #c19935")}>
            Baixar .json
          </button>
          <button
            onClick={() => setShowPreview((v) => !v)}
            style={btn("transparent", "#f3ecdb", "1px solid rgba(243,236,219,0.3)")}
            aria-expanded={showPreview}
          >
            {showPreview ? "Ocultar prévia" : "Ver prévia do que será exportado"}
          </button>
          <button
            onClick={() => setMask((v) => !v)}
            style={btn(
              mask && !adminUnlocked ? "#c19935" : "transparent",
              mask && !adminUnlocked ? "#1a0f3d" : "#f3ecdb",
              mask && !adminUnlocked ? "none" : "1px solid #c19935",
            )}
            aria-pressed={mask}
            disabled={adminUnlocked}
            title={
              adminUnlocked
                ? "Máscara desligada automaticamente no modo admin."
                : "Mascara emails, tokens, JWT, cookies, chaves e IPs antes de copiar/exportar."
            }
          >
            {adminUnlocked ? "Máscara: OFF (admin)" : mask ? "Mascarar: ON" : "Mascarar: OFF"}
          </button>
          {adminUnlocked ? (
            <button
              onClick={() => setAdminUnlocked(false)}
              style={btn("transparent", "#f3ecdb", "1px solid rgba(243,236,219,0.3)")}
            >
              Sair do modo admin
            </button>
          ) : (
            <button onClick={openAdminPrompt} style={btn("transparent", "#f3ecdb", "1px solid #c19935")}>
              🔒 Modo admin
            </button>
          )}
          <button onClick={refresh} style={btn("transparent", "#f3ecdb", "1px solid rgba(243,236,219,0.3)")}>
            Atualizar
          </button>
          <button onClick={clearAll} style={btn("transparent", "#f3ecdb", "1px solid rgba(243,236,219,0.3)")}>
            Limpar tudo
          </button>
          <Link
            to="/"
            style={{
              ...btn("transparent", "#f3ecdb", "1px solid #c19935"),
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Voltar
          </Link>
        </div>

        {effectiveMask && (
          <Section title={`Campos mascarados (${totalRedactions})`}>
            <div style={card}>
              {totalRedactions === 0 ? (
                <p style={{ opacity: 0.7, margin: 0 }}>
                  Nenhum dado sensível detectado no diagnóstico atual.
                </p>
              ) : (
                <>
                  <p style={{ opacity: 0.8, margin: "0 0 8px", fontSize: "0.85rem" }}>
                    Estes rótulos foram substituídos no texto exportado. Os valores originais não aparecem
                    em lugar nenhum sem o modo admin.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {(Object.keys(counts) as RedactionLabel[])
                      .sort()
                      .map((k) => (
                        <span
                          key={k}
                          style={{
                            background: "rgba(193,153,53,0.15)",
                            border: "1px solid #c19935",
                            color: "#ffe7a1",
                            padding: "3px 8px",
                            borderRadius: 999,
                            fontSize: "0.78rem",
                          }}
                        >
                          {LABEL_PT[k]} · {counts[k]}
                        </span>
                      ))}
                  </div>
                </>
              )}
            </div>
          </Section>
        )}

        {showPreview && (
          <Section title="Prévia do que será copiado/baixado">
            <pre style={pre}>{payloadText}</pre>
          </Section>
        )}

        <Section title="Último erro">
          {last ? (
            <div style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <strong style={{ color: "#c19935" }}>{last.type}</strong>
                <span style={{ opacity: 0.7, fontSize: "0.82rem" }}>
                  {new Date(last.time).toLocaleString("pt-BR")}
                </span>
              </div>
              <div style={{ marginTop: 6, color: "#ffb4a2", wordBreak: "break-word" }}>
                {mSafe(last.message, effectiveMask)}
              </div>
              {last.source && (
                <div style={{ opacity: 0.75, fontSize: "0.78rem", marginTop: 4 }}>
                  {mSafe(last.source, effectiveMask)}:{last.lineno}:{last.colno}
                </div>
              )}
              <div style={{ opacity: 0.65, fontSize: "0.78rem", marginTop: 4, wordBreak: "break-all" }}>
                URL: {mSafe(last.url, effectiveMask)}
              </div>
              {last.stack && (
                <>
                  <h3 style={subTitle}>Stack</h3>
                  <pre style={pre}>{mSafe(last.stack, effectiveMask)}</pre>
                </>
              )}
            </div>
          ) : (
            <p style={{ opacity: 0.7 }}>Nenhum erro registrado até agora.</p>
          )}
        </Section>

        <Section title="Ambiente da build">
          <div style={card}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <tbody>
                {Object.entries(env).map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: "1px solid rgba(193,153,53,0.15)" }}>
                    <td style={{ padding: "6px 8px", opacity: 0.7, verticalAlign: "top" }}>{k}</td>
                    <td style={{ padding: "6px 8px", wordBreak: "break-all" }}>
                      {mSafe(String(v), effectiveMask)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title={`Histórico de erros (${errors.length})`}>
          {errors.length === 0 ? (
            <p style={{ opacity: 0.7 }}>Sem erros no histórico.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {errors.map((e, i) => (
                <div key={e.id ?? i} style={card}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                    <strong style={{ color: "#c19935" }}>
                      #{i + 1} · {e.type}
                    </strong>
                    <span style={{ opacity: 0.7, fontSize: "0.8rem" }}>
                      {new Date(e.time).toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <div style={{ marginTop: 4, color: "#ffb4a2" }}>{mSafe(e.message, effectiveMask)}</div>
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section title={`Console capturado (${logs.length})`}>
          {logs.length === 0 ? (
            <p style={{ opacity: 0.7 }}>Nenhum log capturado nesta sessão.</p>
          ) : (
            <pre style={pre}>
              {logs
                .map(
                  (l) =>
                    `[${l.time.split("T")[1]?.replace("Z", "")}] [${l.level.toUpperCase()}] ${mSafe(
                      l.message,
                      effectiveMask,
                    )}`,
                )
                .join("\n")}
            </pre>
          )}
        </Section>
      </div>

      {adminPromptOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="admin-title"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 100,
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setAdminPromptOpen(false);
          }}
        >
          <div
            style={{
              background: "#1a0f3d",
              border: "1px solid #c19935",
              borderRadius: 10,
              padding: "1.25rem 1.25rem 1rem",
              width: "100%",
              maxWidth: 420,
              color: "#f3ecdb",
            }}
          >
            <h2 id="admin-title" style={{ fontFamily: "'Lora', serif", color: "#c19935", margin: 0 }}>
              {needsSetup ? "Definir senha do modo admin" : "Modo admin"}
            </h2>
            <p style={{ opacity: 0.75, fontSize: "0.82rem", marginTop: 6 }}>
              {needsSetup
                ? "Crie uma senha (mínimo 6 caracteres). Ela fica salva apenas neste navegador."
                : "Digite a senha para desativar o mascaramento nesta sessão."}
            </p>
            <p style={{ opacity: 0.6, fontSize: "0.75rem", marginTop: 4 }}>
              ⚠ Proteção client-side. Não é substituto para autenticação real.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitAdmin();
              }}
              style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}
            >
              <input
                type="password"
                autoFocus
                value={adminPwd}
                onChange={(e) => setAdminPwd(e.target.value)}
                placeholder="Senha"
                style={input}
              />
              {needsSetup && (
                <input
                  type="password"
                  value={adminPwd2}
                  onChange={(e) => setAdminPwd2(e.target.value)}
                  placeholder="Confirmar senha"
                  style={input}
                />
              )}
              {adminErr && (
                <div style={{ color: "#ffb4a2", fontSize: "0.82rem" }}>{adminErr}</div>
              )}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                <button type="submit" style={btn("#c19935", "#1a0f3d")}>
                  {needsSetup ? "Salvar e entrar" : "Entrar"}
                </button>
                <button
                  type="button"
                  onClick={() => setAdminPromptOpen(false)}
                  style={btn("transparent", "#f3ecdb", "1px solid rgba(243,236,219,0.3)")}
                >
                  Cancelar
                </button>
                {!needsSetup && (
                  <button
                    type="button"
                    onClick={resetAdminPassword}
                    style={btn("transparent", "#f3ecdb", "1px solid rgba(243,236,219,0.3)")}
                  >
                    Esqueci a senha
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function mSafe(s: string | undefined | null, mask: boolean): string {
  const str = String(s ?? "");
  return mask ? redactWithStats(str).text : str;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "1.5rem" }}>
      <h2
        style={{
          fontFamily: "'Lora', serif",
          color: "#c19935",
          fontSize: "1.15rem",
          marginBottom: 8,
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const card: React.CSSProperties = {
  background: "rgba(0,0,0,0.3)",
  border: "1px solid rgba(193,153,53,0.3)",
  borderRadius: 8,
  padding: "0.85rem 1rem",
};

const subTitle: React.CSSProperties = {
  fontFamily: "'Lora', serif",
  color: "#c19935",
  fontSize: "0.95rem",
  margin: "12px 0 6px",
};

const pre: React.CSSProperties = {
  background: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(193,153,53,0.25)",
  padding: "0.75rem",
  borderRadius: 6,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: "0.8rem",
  maxHeight: 380,
  overflow: "auto",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  color: "#f3ecdb",
  margin: 0,
};

const input: React.CSSProperties = {
  background: "rgba(0,0,0,0.4)",
  border: "1px solid rgba(193,153,53,0.4)",
  borderRadius: 6,
  padding: "0.6rem 0.75rem",
  color: "#f3ecdb",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
};

function btn(bg: string, color: string, border = "none"): React.CSSProperties {
  return {
    background: bg,
    color,
    border,
    padding: "0.55rem 1rem",
    borderRadius: 6,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.88rem",
    cursor: "pointer",
    fontWeight: 600,
  };
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getConsoleBuffer, clearConsoleBuffer, type ConsoleLogEntry } from "@/utils/consoleBuffer";
import { redact } from "@/utils/redact";

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

export default function Diagnostico() {
  const [errors, setErrors] = useState<CapturedError[]>([]);
  const [logs, setLogs] = useState<ConsoleLogEntry[]>([]);
  const [env, setEnv] = useState(getEnvInfo);
  const [copied, setCopied] = useState(false);
  const [mask, setMask] = useState(true);

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

  const last = errors[0];

  const buildPayload = () => {
    return [
      `Diagnóstico Folheando Fé — ${new Date().toLocaleString("pt-BR")}`,
      "",
      "== Ambiente ==",
      ...Object.entries(env).map(([k, v]) => `${k}: ${String(v)}`),
      "",
      "== Último erro ==",
      last
        ? [
            `Tipo: ${last.type}`,
            `Quando: ${last.time}`,
            `Mensagem: ${last.message}`,
            last.source ? `Local: ${last.source}:${last.lineno}:${last.colno}` : "",
            `URL: ${last.url}`,
            "Stack:",
            last.stack ?? "(sem stack)",
          ]
            .filter(Boolean)
            .join("\n")
        : "(nenhum erro registrado)",
      "",
      `== Histórico de erros (${errors.length}) ==`,
      ...errors.map(
        (e, i) => `#${i + 1} [${e.time}] (${e.type}) ${e.message}`,
      ),
      "",
      `== Console (${logs.length}) ==`,
      ...logs.map((l) => `[${l.time}] [${l.level.toUpperCase()}] ${l.message}`),
    ].join("\n");
  };

  const copyAll = async () => {
    const text = buildPayload();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
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
          <h1
            style={{
              fontFamily: "'Lora', serif",
              color: "#c19935",
              fontSize: "2rem",
              margin: 0,
            }}
          >
            Diagnóstico
          </h1>
          <p style={{ opacity: 0.8, marginTop: 6 }}>
            Último erro, console capturado e informações do ambiente da build.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: "1.25rem",
          }}
        >
          <button onClick={copyAll} style={btn("#c19935", "#1a0f3d")}>
            {copied ? "Copiado ✓" : "Copiar diagnóstico"}
          </button>
          <button onClick={refresh} style={btn("transparent", "#f3ecdb", "1px solid #c19935")}>
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

        <Section title="Último erro">
          {last ? (
            <div style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <strong style={{ color: "#c19935" }}>{last.type}</strong>
                <span style={{ opacity: 0.7, fontSize: "0.82rem" }}>
                  {new Date(last.time).toLocaleString("pt-BR")}
                </span>
              </div>
              <div style={{ marginTop: 6, color: "#ffb4a2", wordBreak: "break-word" }}>{last.message}</div>
              {last.source && (
                <div style={{ opacity: 0.75, fontSize: "0.78rem", marginTop: 4 }}>
                  {last.source}:{last.lineno}:{last.colno}
                </div>
              )}
              <div style={{ opacity: 0.65, fontSize: "0.78rem", marginTop: 4, wordBreak: "break-all" }}>
                URL: {last.url}
              </div>
              {last.stack && (
                <>
                  <h3 style={subTitle}>Stack</h3>
                  <pre style={pre}>{last.stack}</pre>
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
                    <td style={{ padding: "6px 8px", wordBreak: "break-all" }}>{String(v)}</td>
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
                    <strong style={{ color: "#c19935" }}>#{i + 1} · {e.type}</strong>
                    <span style={{ opacity: 0.7, fontSize: "0.8rem" }}>
                      {new Date(e.time).toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <div style={{ marginTop: 4, color: "#ffb4a2" }}>{e.message}</div>
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
                    `[${l.time.split("T")[1]?.replace("Z", "")}] [${l.level.toUpperCase()}] ${l.message}`,
                )
                .join("\n")}
            </pre>
          )}
        </Section>
      </div>
    </main>
  );
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

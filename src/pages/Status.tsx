import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface Check {
  label: string;
  status: "ok" | "warn" | "fail";
  detail: string;
}

const FLAG_KEY = "render-health-last-failure";
const ERR_KEY = "global-error-reports";

function safeGet(key: string): unknown {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function Status() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const bootTime = useMemo(() => new Date(), []);

  const lastFailure = safeGet(FLAG_KEY) as
    | { time: string; reason: string; url: string }
    | null;
  const errors = (safeGet(ERR_KEY) as unknown[]) || [];

  const rootEl = typeof document !== "undefined" ? document.getElementById("root") : null;
  const rootHeight = rootEl?.getBoundingClientRect().height ?? 0;

  const checks: Check[] = [
    {
      label: "App montado",
      status: "ok",
      detail: "React montou este componente com sucesso.",
    },
    {
      label: "Altura do container principal",
      status: rootHeight > 40 ? "ok" : "fail",
      detail: `#root com ${Math.round(rootHeight)}px de altura.`,
    },
    {
      label: "Última falha de renderização",
      status: lastFailure ? "warn" : "ok",
      detail: lastFailure
        ? `${new Date(lastFailure.time).toLocaleString("pt-BR")} — ${lastFailure.reason}`
        : "Nenhuma falha registrada.",
    },
    {
      label: "Erros globais capturados",
      status: errors.length === 0 ? "ok" : errors.length < 5 ? "warn" : "fail",
      detail: `${errors.length} erro(s) armazenado(s) no navegador.`,
    },
    {
      label: "LocalStorage disponível",
      status: (() => {
        try {
          window.localStorage.setItem("__probe__", "1");
          window.localStorage.removeItem("__probe__");
          return "ok" as const;
        } catch {
          return "fail" as const;
        }
      })(),
      detail: "Necessário para progresso de leitura e diagnóstico.",
    },
    {
      label: "Online",
      status: navigator.onLine ? "ok" : "warn",
      detail: navigator.onLine ? "Conexão detectada." : "Navegador reporta offline.",
    },
  ];

  const overall: "ok" | "warn" | "fail" = checks.some((c) => c.status === "fail")
    ? "fail"
    : checks.some((c) => c.status === "warn")
      ? "warn"
      : "ok";

  const badge = {
    ok: { bg: "#2d5a3d", label: "OPERACIONAL" },
    warn: { bg: "#8a6d1f", label: "ATENÇÃO" },
    fail: { bg: "#7a2020", label: "FALHA" },
  }[overall];

  const buildEnv = {
    mode: import.meta.env.MODE,
    dev: String(import.meta.env.DEV),
    prod: String(import.meta.env.PROD),
    baseUrl: import.meta.env.BASE_URL,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg,#1a0f3d,#0d0722)",
        color: "#f3ecdb",
        fontFamily: "'Montserrat', system-ui, sans-serif",
        padding: "2.5rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <header style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <h1
              style={{
                fontFamily: "'Lora', serif",
                color: "#c19935",
                fontSize: "1.8rem",
                margin: 0,
              }}
            >
              Status do Folheando Fé
            </h1>
            <span
              style={{
                background: badge.bg,
                color: "#f3ecdb",
                padding: "0.3rem 0.7rem",
                borderRadius: 999,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              {badge.label}
            </span>
          </div>
          <p style={{ opacity: 0.7, marginTop: "0.5rem", fontSize: "0.85rem" }}>
            Página de healthcheck — carregada em{" "}
            {bootTime.toLocaleString("pt-BR")}. Agora: {now.toLocaleTimeString("pt-BR")}
          </p>
        </header>

        <section
          style={{
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(193,153,53,0.35)",
            borderRadius: 10,
            padding: "1rem 1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Lora', serif",
              color: "#c19935",
              fontSize: "1.1rem",
              margin: "0 0 0.75rem",
            }}
          >
            Checks
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {checks.map((c) => (
              <li
                key={c.label}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "0.55rem 0",
                  borderBottom: "1px solid rgba(193,153,53,0.15)",
                  alignItems: "flex-start",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    marginTop: 3,
                    width: 10,
                    height: 10,
                    borderRadius: 999,
                    background:
                      c.status === "ok" ? "#4ade80" : c.status === "warn" ? "#facc15" : "#f87171",
                    flex: "0 0 auto",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{c.label}</div>
                  <div style={{ opacity: 0.75, fontSize: "0.78rem" }}>{c.detail}</div>
                </div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    color:
                      c.status === "ok" ? "#4ade80" : c.status === "warn" ? "#facc15" : "#f87171",
                  }}
                >
                  {c.status.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section
          style={{
            background: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(193,153,53,0.35)",
            borderRadius: 10,
            padding: "1rem 1.25rem",
            marginBottom: "1.25rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Lora', serif",
              color: "#c19935",
              fontSize: "1.1rem",
              margin: "0 0 0.75rem",
            }}
          >
            Ambiente do build
          </h2>
          <pre
            style={{
              margin: 0,
              padding: "0.75rem",
              background: "rgba(0,0,0,0.4)",
              borderRadius: 6,
              fontSize: "0.78rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
{JSON.stringify(
  {
    ...buildEnv,
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    devicePixelRatio: window.devicePixelRatio,
    url: window.location.href,
  },
  null,
  2,
)}
          </pre>
        </section>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link
            to="/"
            style={{
              background: "#c19935",
              color: "#1a0f3d",
              padding: "0.6rem 1.1rem",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.85rem",
            }}
          >
            Ir para o livro
          </Link>
          <Link
            to="/diagnostico"
            style={{
              background: "transparent",
              color: "#f3ecdb",
              padding: "0.6rem 1.1rem",
              borderRadius: 999,
              border: "1px solid rgba(193,153,53,0.6)",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.85rem",
            }}
          >
            Diagnóstico detalhado
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              background: "transparent",
              color: "#f3ecdb",
              padding: "0.6rem 1.1rem",
              borderRadius: 999,
              border: "1px solid rgba(193,153,53,0.6)",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "0.85rem",
              fontFamily: "'Montserrat', system-ui, sans-serif",
            }}
          >
            Recarregar
          </button>
        </div>

        {/* Marcador para monitoramento externo (curl/uptime). */}
        <div data-healthcheck="ok" style={{ display: "none" }}>
          FOLHEANDO_FE_STATUS_OK
        </div>
      </div>
    </div>
  );
}

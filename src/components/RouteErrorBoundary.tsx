import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  routeName: string;
  children: ReactNode;
}

interface LogEntry {
  level: "log" | "info" | "warn" | "error";
  message: string;
  time: string;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  logs: LogEntry[];
  history: ErrorHistoryEntry[];
}

export interface ErrorHistoryEntry {
  time: string;
  name: string;
  message: string;
  stackHead?: string;
  url: string;
  userAgent: string;
}

const HISTORY_KEY_PREFIX = "route-error-history:";
const MAX_HISTORY = 20;

function loadHistory(routeName: string): ErrorHistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY_PREFIX + routeName);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY) : [];
  } catch {
    return [];
  }
}

function saveHistory(routeName: string, history: ErrorHistoryEntry[]) {
  try {
    window.localStorage.setItem(
      HISTORY_KEY_PREFIX + routeName,
      JSON.stringify(history.slice(0, MAX_HISTORY)),
    );
  } catch {
    /* ignore quota */
  }
}

function clearHistory(routeName: string) {
  try {
    window.localStorage.removeItem(HISTORY_KEY_PREFIX + routeName);
  } catch {
    /* ignore */
  }
}

function formatDelta(fromIso: string, toIso: string): string {
  const ms = new Date(toIso).getTime() - new Date(fromIso).getTime();
  if (!isFinite(ms) || ms < 0) return "";
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h${m % 60 ? ` ${m % 60}min` : ""}`;
  const d = Math.floor(h / 24);
  return `${d}d${h % 24 ? ` ${h % 24}h` : ""}`;
}

const MAX_LOGS = 100;
const consoleBuffer: LogEntry[] = [];
let consolePatched = false;

function patchConsole() {
  if (consolePatched || typeof window === "undefined") return;
  consolePatched = true;
  (["log", "info", "warn", "error"] as const).forEach((level) => {
    const original = console[level].bind(console);
    console[level] = (...args: unknown[]) => {
      try {
        const message = args
          .map((a) => {
            if (a instanceof Error) return `${a.name}: ${a.message}\n${a.stack ?? ""}`;
            if (typeof a === "object") {
              try {
                return JSON.stringify(a, null, 2);
              } catch {
                return String(a);
              }
            }
            return String(a);
          })
          .join(" ");
        consoleBuffer.push({ level, message, time: new Date().toISOString() });
        if (consoleBuffer.length > MAX_LOGS) consoleBuffer.shift();
      } catch {
        /* ignore */
      }
      original(...args);
    };
  });

  window.addEventListener("error", (e) => {
    consoleBuffer.push({
      level: "error",
      message: `window.error: ${e.message} @ ${e.filename}:${e.lineno}:${e.colno}`,
      time: new Date().toISOString(),
    });
    if (consoleBuffer.length > MAX_LOGS) consoleBuffer.shift();
  });
  window.addEventListener("unhandledrejection", (e) => {
    consoleBuffer.push({
      level: "error",
      message: `unhandledrejection: ${String(e.reason)}`,
      time: new Date().toISOString(),
    });
    if (consoleBuffer.length > MAX_LOGS) consoleBuffer.shift();
  });
}

patchConsole();

export class RouteErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
    logs: [],
    history: loadHistory(this.props.routeName),
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`[RouteErrorBoundary:${this.props.routeName}]`, error, errorInfo);
    const entry: ErrorHistoryEntry = {
      time: new Date().toISOString(),
      name: error.name,
      message: error.message,
      stackHead: error.stack?.split("\n").slice(0, 3).join("\n"),
      url: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };
    const history = [entry, ...this.state.history].slice(0, MAX_HISTORY);
    saveHistory(this.props.routeName, history);
    this.setState({ errorInfo, logs: [...consoleBuffer], history });
  }

  handleReset = () => {
    this.setState({ error: null, errorInfo: null, logs: [] });
  };

  handleClearHistory = () => {
    clearHistory(this.props.routeName);
    this.setState({ history: [] });
  };

  handleCopy = () => {
    const { error, errorInfo, logs, history } = this.state;
    const payload = [
      `Rota: ${this.props.routeName}`,
      `Erro: ${error?.name}: ${error?.message}`,
      `Stack:\n${error?.stack ?? "(sem stack)"}`,
      `Component stack:${errorInfo?.componentStack ?? "\n(sem info)"}`,
      `\nHistórico (${history.length}):`,
      ...history.map(
        (h, i) => `#${i + 1} [${h.time}] ${h.name}: ${h.message} @ ${h.url}`,
      ),
      `\nLogs do console (${logs.length}):`,
      ...logs.map((l) => `[${l.time}] [${l.level}] ${l.message}`),
    ].join("\n");
    navigator.clipboard?.writeText(payload).catch(() => {
      /* ignore */
    });
  };

  render() {
    if (!this.state.error) return this.props.children;

    const { error, errorInfo, logs, history } = this.state;
    const first = history[history.length - 1];
    const last = history[0];
    const span = first && last && first !== last ? formatDelta(first.time, last.time) : "";
    return (
      <div
        role="alert"
        aria-live="assertive"
        style={{
          minHeight: "100vh",
          background: "#1a0f3d",
          color: "#f3ecdb",
          fontFamily: "'Montserrat', system-ui, sans-serif",
          padding: "2rem",
          overflow: "auto",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "'Lora', serif",
              color: "#c19935",
              fontSize: "2rem",
              marginBottom: "0.5rem",
            }}
          >
            Falha ao carregar a rota /{this.props.routeName}
          </h1>
          <p style={{ opacity: 0.8, marginBottom: "1rem" }}>
            Ocorreu um erro ao renderizar esta página. Detalhes abaixo para diagnóstico.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
            }}
          >
            <Badge label="Total de falhas" value={String(history.length)} />
            {last && <Badge label="Última" value={new Date(last.time).toLocaleString("pt-BR")} />}
            {span && <Badge label="Janela observada" value={span} />}
            {history.length >= 3 && (
              <Badge label="Padrão" value="intermitente (≥3)" highlight />
            )}
          </div>

          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <button
              onClick={this.handleReset}
              style={btnStyle("#c19935", "#1a0f3d")}
            >
              Tentar novamente
            </button>
            <button
              onClick={() => window.location.reload()}
              style={btnStyle("transparent", "#f3ecdb", "1px solid #c19935")}
            >
              Recarregar página
            </button>
            <button
              onClick={this.handleCopy}
              style={btnStyle("transparent", "#f3ecdb", "1px solid #c19935")}
            >
              Copiar diagnóstico
            </button>
            <a
              href="/"
              style={{
                ...btnStyle("transparent", "#f3ecdb", "1px solid #c19935"),
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Voltar ao início
            </a>
          </div>

          <Section title="Mensagem de erro">
            <code style={codeStyle}>
              {error?.name}: {error?.message}
            </code>
          </Section>

          {error?.stack && (
            <Section title="Stack trace">
              <pre style={preStyle}>{error.stack}</pre>
            </Section>
          )}

          {errorInfo?.componentStack && (
            <Section title="Component stack">
              <pre style={preStyle}>{errorInfo.componentStack}</pre>
            </Section>
          )}

          <Section title={`Console (${logs.length})`}>
            {logs.length === 0 ? (
              <p style={{ opacity: 0.7 }}>Nenhum log capturado.</p>
            ) : (
              <pre style={preStyle}>
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
      </div>
    );
  }
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: "1.25rem" }}>
      <h2
        style={{
          fontFamily: "'Lora', serif",
          color: "#c19935",
          fontSize: "1.1rem",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

const codeStyle: React.CSSProperties = {
  display: "block",
  background: "rgba(0,0,0,0.35)",
  border: "1px solid rgba(193,153,53,0.3)",
  padding: "0.75rem",
  borderRadius: 6,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: "0.85rem",
  color: "#ffb4a2",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

const preStyle: React.CSSProperties = {
  ...codeStyle,
  maxHeight: 320,
  overflow: "auto",
  color: "#f3ecdb",
};

function btnStyle(bg: string, color: string, border = "none"): React.CSSProperties {
  return {
    background: bg,
    color,
    border,
    padding: "0.55rem 1rem",
    borderRadius: 6,
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontWeight: 600,
  };
}

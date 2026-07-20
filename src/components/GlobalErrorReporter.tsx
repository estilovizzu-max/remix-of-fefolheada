import { useEffect, useState, useCallback } from "react";

interface CapturedError {
  id: string;
  time: string;
  type: "error" | "unhandledrejection";
  message: string;
  source?: string;
  lineno?: number;
  colno?: number;
  stack?: string;
  url: string;
  userAgent: string;
}

const STORAGE_KEY = "global-error-reports";
const MAX_STORED = 30;

function loadStored(): CapturedError[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_STORED) : [];
  } catch {
    return [];
  }
}

function persist(list: CapturedError[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, MAX_STORED)));
  } catch {
    /* ignore quota */
  }
}

function serializeReason(reason: unknown): { message: string; stack?: string } {
  if (reason instanceof Error) return { message: `${reason.name}: ${reason.message}`, stack: reason.stack };
  if (typeof reason === "object" && reason !== null) {
    try {
      return { message: JSON.stringify(reason) };
    } catch {
      return { message: String(reason) };
    }
  }
  return { message: String(reason) };
}

export function GlobalErrorReporter() {
  const [errors, setErrors] = useState<CapturedError[]>(() =>
    typeof window === "undefined" ? [] : loadStored(),
  );
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(true);

  const push = useCallback((err: CapturedError) => {
    setErrors((prev) => {
      const next = [err, ...prev].slice(0, MAX_STORED);
      persist(next);
      return next;
    });
    setOpen(true);
    setMinimized(false);
  }, []);

  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        time: new Date().toISOString(),
        type: "error",
        message: event.message || "Erro desconhecido",
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error instanceof Error ? event.error.stack : undefined,
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      const { message, stack } = serializeReason(event.reason);
      push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        time: new Date().toISOString(),
        type: "unhandledrejection",
        message,
        stack,
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, [push]);

  const clearAll = () => {
    setErrors([]);
    persist([]);
    setOpen(false);
  };

  const copyDiagnostic = async () => {
    const payload = [
      `Diagnóstico Folheando Fé — ${new Date().toLocaleString("pt-BR")}`,
      `URL: ${window.location.href}`,
      `UA: ${navigator.userAgent}`,
      `Total de erros: ${errors.length}`,
      "",
      ...errors.map((e, i) => {
        const loc = e.source ? ` @ ${e.source}:${e.lineno}:${e.colno}` : "";
        return [
          `#${i + 1} [${e.time}] (${e.type})`,
          `${e.message}${loc}`,
          e.stack ? `Stack:\n${e.stack}` : "(sem stack)",
          "",
        ].join("\n");
      }),
    ].join("\n");
    try {
      await navigator.clipboard.writeText(payload);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = payload;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  };

  if (!open && errors.length === 0) return null;

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        aria-label={`Abrir diagnóstico (${errors.length} erros)`}
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 2147483647,
          background: "#c19935",
          color: "#1a0f3d",
          border: "none",
          borderRadius: 999,
          padding: "0.6rem 1rem",
          fontFamily: "'Montserrat', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          cursor: "pointer",
        }}
      >
        ⚠ {errors.length} erro{errors.length === 1 ? "" : "s"}
      </button>
    );
  }

  return (
    <div
      role="alertdialog"
      aria-label="Diagnóstico de erros"
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        width: "min(520px, calc(100vw - 32px))",
        maxHeight: "min(70vh, 640px)",
        zIndex: 2147483647,
        background: "#1a0f3d",
        color: "#f3ecdb",
        border: "1px solid #c19935",
        borderRadius: 10,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Montserrat', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid rgba(193,153,53,0.35)",
        }}
      >
        <strong style={{ color: "#c19935", fontFamily: "'Lora', serif" }}>
          Diagnóstico ({errors.length})
        </strong>
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={copyDiagnostic} style={miniBtn}>
            Copiar
          </button>
          <button type="button" onClick={clearAll} style={miniBtn}>
            Limpar
          </button>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            aria-label="Minimizar"
            style={miniBtn}
          >
            —
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            style={miniBtn}
          >
            ✕
          </button>
        </div>
      </div>
      <div style={{ overflow: "auto", padding: "0.75rem 1rem" }}>
        {errors.length === 0 ? (
          <p style={{ opacity: 0.7, margin: 0 }}>Sem erros registrados.</p>
        ) : (
          errors.map((e) => (
            <div
              key={e.id}
              style={{
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(193,153,53,0.25)",
                borderRadius: 6,
                padding: "0.6rem 0.75rem",
                marginBottom: 8,
                fontSize: "0.8rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
                <span style={{ color: "#c19935" }}>{e.type}</span>
                <span style={{ opacity: 0.7 }}>{new Date(e.time).toLocaleString("pt-BR")}</span>
              </div>
              <div style={{ marginTop: 4, color: "#ffb4a2", wordBreak: "break-word" }}>{e.message}</div>
              {e.source && (
                <div style={{ opacity: 0.7, marginTop: 2, fontSize: "0.72rem" }}>
                  {e.source}:{e.lineno}:{e.colno}
                </div>
              )}
              {e.stack && (
                <pre
                  style={{
                    marginTop: 6,
                    padding: "0.5rem",
                    background: "rgba(0,0,0,0.4)",
                    borderRadius: 4,
                    maxHeight: 160,
                    overflow: "auto",
                    fontSize: "0.72rem",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    color: "#f3ecdb",
                  }}
                >
                  {e.stack}
                </pre>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const miniBtn: React.CSSProperties = {
  background: "transparent",
  color: "#f3ecdb",
  border: "1px solid rgba(193,153,53,0.5)",
  borderRadius: 4,
  padding: "0.25rem 0.55rem",
  fontSize: "0.75rem",
  cursor: "pointer",
  fontFamily: "'Montserrat', system-ui, sans-serif",
};

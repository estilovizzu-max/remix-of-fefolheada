import { useEffect, useState } from "react";
import { captureRenderFailure } from "@/lib/sentry";

/**
 * Detecta falha de renderização (container principal com altura 0)
 * após a hidratação e exibe um fallback amigável com botão de recarregar.
 *
 * Também persiste um marcador em localStorage para o /status e o /diagnostico
 * e reporta o evento ao Sentry (se configurado).
 */
const CHECK_DELAY_MS = 4000;
const MIN_HEIGHT_PX = 40;
const FLAG_KEY = "render-health-last-failure";


function markFailure(reason: string) {
  try {
    window.localStorage.setItem(
      FLAG_KEY,
      JSON.stringify({
        time: new Date().toISOString(),
        url: window.location.href,
        reason,
        userAgent: navigator.userAgent,
      }),
    );
  } catch {
    /* ignore */
  }
}

export function RenderHealthGuard() {
  const [failed, setFailed] = useState(false);
  const [reason, setReason] = useState<string>("");

  useEffect(() => {
    const t = window.setTimeout(() => {
      const root = document.getElementById("root");
      if (!root) {
        setReason("Elemento #root não encontrado.");
        markFailure("root-missing");
        captureRenderFailure("root-missing");
        setFailed(true);
        return;
      }
      const rect = root.getBoundingClientRect();
      if (rect.height < MIN_HEIGHT_PX || rect.width < MIN_HEIGHT_PX) {
        const msg = `Conteúdo principal colapsado (${Math.round(rect.width)}x${Math.round(rect.height)}px) após ${CHECK_DELAY_MS}ms.`;
        setReason(msg);
        markFailure(msg);
        captureRenderFailure(msg, {
          rootHeight: rect.height,
          rootWidth: rect.width,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
        });
        setFailed(true);

      }
    }, CHECK_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  if (!failed) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483646,
        background: "linear-gradient(160deg,#1a0f3d,#0d0722)",
        color: "#f3ecdb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Montserrat', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: "100%",
          background: "rgba(0,0,0,0.35)",
          border: "1px solid #c19935",
          borderRadius: 12,
          padding: "2rem",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }} aria-hidden>📖</div>
        <h1
          style={{
            fontFamily: "'Lora', serif",
            color: "#c19935",
            fontSize: "1.6rem",
            margin: "0 0 0.75rem",
          }}
        >
          O livro não conseguiu abrir agora
        </h1>
        <p style={{ margin: "0 0 1.25rem", lineHeight: 1.55, opacity: 0.9 }}>
          Tivemos um problema ao carregar a página. Isso pode ser um cache antigo
          ou uma falha momentânea de rede. Tente recarregar.
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => {
              try {
                window.localStorage.removeItem(FLAG_KEY);
              } catch {
                /* ignore */
              }
              window.location.reload();
            }}
            style={{
              background: "#c19935",
              color: "#1a0f3d",
              border: "none",
              borderRadius: 999,
              padding: "0.7rem 1.4rem",
              fontWeight: 700,
              fontFamily: "'Montserrat', system-ui, sans-serif",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Recarregar página
          </button>
          <a
            href="/status"
            style={{
              background: "transparent",
              color: "#f3ecdb",
              border: "1px solid rgba(193,153,53,0.6)",
              borderRadius: 999,
              padding: "0.7rem 1.4rem",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Ver status
          </a>
        </div>
        {reason && (
          <p style={{ marginTop: "1.25rem", opacity: 0.55, fontSize: "0.72rem" }}>
            Diagnóstico: {reason}
          </p>
        )}
      </div>
    </div>
  );
}

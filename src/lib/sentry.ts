import * as Sentry from "@sentry/react";

/**
 * DSN público do Sentry (safe no bundle client-side).
 * Preencha via variável de ambiente VITE_SENTRY_DSN OU cole aqui direto.
 * Enquanto vazio, o Sentry fica desativado silenciosamente.
 */
const DSN =
  (import.meta.env.VITE_SENTRY_DSN as string | undefined) ||
  "" /* cole o DSN aqui, ex.: "https://xxxx@o0.ingest.sentry.io/0" */;

let initialized = false;

export function initSentry() {
  if (initialized || !DSN) return;
  try {
    Sentry.init({
      dsn: DSN,
      environment: import.meta.env.MODE,
      release: (import.meta.env.VITE_BUILD_ID as string) || "folheando-fe@local",
      // Amostragem conservadora — só perf básica, sem session replay pesado.
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 1.0,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true }),
      ],
      beforeSend(event) {
        // Não envia em dev/localhost para não poluir o projeto.
        if (import.meta.env.DEV) return null;
        if (typeof window !== "undefined") {
          const h = window.location.hostname;
          if (h === "localhost" || h === "127.0.0.1" || h.endsWith(".local")) return null;
        }
        return event;
      },
    });
    initialized = true;
  } catch (err) {
    // Nunca deixar o Sentry quebrar o app.
    console.warn("[sentry] init falhou", err);
  }
}

export function isSentryEnabled() {
  return initialized;
}

export function captureRenderFailure(reason: string, extra?: Record<string, unknown>) {
  if (!initialized) return;
  try {
    Sentry.captureMessage(`render-failure: ${reason}`, {
      level: "error",
      tags: { kind: "render-failure" },
      extra,
    });
  } catch {
    /* ignore */
  }
}

export { Sentry };

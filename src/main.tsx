import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initConsoleBuffer } from "./utils/consoleBuffer";
import { initSentry } from "./lib/sentry";

initConsoleBuffer();
initSentry();


// Ambiente: dev mantém o badge visível; qualquer outro contexto oculta.
const isDev =
  import.meta.env.DEV ||
  ["localhost", "127.0.0.1"].includes(location.hostname) ||
  location.hostname.endsWith(".local");

if (!isDev) {
  document.documentElement.classList.add("production-ui-clean");

  const BADGE_SELECTOR = [
    "#lovable-badge",
    '[id="lovable-badge"]',
    '[id^="lovable-badge"]',
    '[id*="lovable-badge"]',
    '[class*="lovable-badge"]',
    '[data-lovable-badge]',
    '[data-testid="lovable-badge"]',
    'a[href*="lovable.dev"][target="_blank"]',
  ].join(",");

  const neutralize = (el: Element) => {
    if (el === document.documentElement || el === document.body || el.id === "root") {
      return;
    }
    const node = el as HTMLElement;
    node.setAttribute("aria-hidden", "true");
    node.setAttribute("tabindex", "-1");
    // `inert` remove foco/clique/AT do elemento e descendentes.
    (node as HTMLElement & { inert?: boolean }).inert = true;
    node.setAttribute("inert", "");
    node.style.setProperty("display", "none", "important");
    node.style.setProperty("pointer-events", "none", "important");
    // Impede foco programático em descendentes focáveis remanescentes.
    node
      .querySelectorAll<HTMLElement>("a,button,input,textarea,select,[tabindex]")
      .forEach((child) => child.setAttribute("tabindex", "-1"));
  };

  const sweep = () => {
    document.querySelectorAll(BADGE_SELECTOR).forEach(neutralize);
  };

  // Aplica antes do primeiro paint, novamente após hidratação e em qualquer mutação.
  sweep();
  document.addEventListener("DOMContentLoaded", sweep, { once: true });
  window.addEventListener("load", sweep, { once: true });

  const observer = new MutationObserver(sweep);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["id", "class", "data-lovable-badge", "href"],
  });

  // Cobre navegações SPA (History API) sem depender do router.
  const patchHistory = (method: "pushState" | "replaceState") => {
    const original = history[method];
    history[method] = function (...args: Parameters<typeof original>) {
      const result = original.apply(this, args);
      queueMicrotask(sweep);
      return result;
    };
  };
  patchHistory("pushState");
  patchHistory("replaceState");
  window.addEventListener("popstate", sweep);
}

createRoot(document.getElementById("root")!).render(<App />);

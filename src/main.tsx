import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Em produção, marca o <html> para o CSS ocultar #lovable-badge.
// Em desenvolvimento, o badge continua visível.
if (import.meta.env.PROD) {
  document.documentElement.classList.add("hide-lovable-badge");

  // Garante ocultação mesmo se o badge for injetado depois (navegação SPA, lazy load).
  const ensureHidden = () => {
    const el = document.getElementById("lovable-badge");
    if (el) el.style.setProperty("display", "none", "important");
  };
  ensureHidden();
  const mo = new MutationObserver(ensureHidden);
  mo.observe(document.body || document.documentElement, { childList: true, subtree: true });
}

createRoot(document.getElementById("root")!).render(<App />);

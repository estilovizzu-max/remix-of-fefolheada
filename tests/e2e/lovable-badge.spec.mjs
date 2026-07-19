/**
 * E2E: garante que #lovable-badge (e wrappers equivalentes) fica oculto no mobile
 * durante o carregamento inicial e ao navegar entre poemas, sem gerar CLS.
 *
 * Como rodar (com o dev server em http://localhost:8080):
 *   node tests/e2e/lovable-badge.spec.mjs
 *
 * Requer Playwright disponível no ambiente. Em dev local o badge é intencionalmente
 * visível, então o teste força a classe `hide-lovable-badge` no <html> para simular
 * o comportamento de produção.
 */
import { chromium } from "playwright";
import assert from "node:assert/strict";

const BASE_URL = process.env.E2E_BASE_URL || "http://localhost:8080";
const BADGE_SELECTOR = [
  "#lovable-badge",
  '[id^="lovable-badge"]',
  '[class*="lovable-badge"]',
  '[data-lovable-badge]',
  'a[href*="lovable.dev"][target="_blank"]',
].join(",");

const isHiddenInPage = (selector) => {
  const els = Array.from(document.querySelectorAll(selector));
  if (els.length === 0) return true;
  return els.every((el) => {
    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return (
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0" ||
      rect.width === 0 ||
      rect.height === 0 ||
      el.hasAttribute("inert")
    );
  });
};

const measureCLS = `
  window.__cls = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) window.__cls += entry.value;
    }
  }).observe({ type: "layout-shift", buffered: true });
`;

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 13
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  await context.addInitScript(measureCLS);
  // Força modo "produção" para o badge (dev normalmente mantém visível).
  await context.addInitScript(() => {
    document.documentElement.classList.add("hide-lovable-badge");
  });

  const page = await context.newPage();
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  // 1) Carregamento inicial: badge oculto.
  let hidden = await page.evaluate(isHiddenInPage, BADGE_SELECTOR);
  assert.equal(hidden, true, "badge deveria estar oculto no carregamento inicial");

  // 2) Não é focável via teclado.
  await page.keyboard.press("Tab");
  const activeIsBadge = await page.evaluate((sel) => {
    const a = document.activeElement;
    return !!a && a.closest(sel) !== null;
  }, BADGE_SELECTOR);
  assert.equal(activeIsBadge, false, "badge não deveria receber foco por Tab");

  // 3) Navega entre poemas (usa botões de próximo/anterior do leitor).
  const nextCandidates = [
    'button[aria-label*="Próxim" i]',
    'button[aria-label*="Next" i]',
    'button:has-text("Próximo")',
    'button:has-text(">")',
  ];
  let advanced = 0;
  for (let i = 0; i < 5; i++) {
    let clicked = false;
    for (const sel of nextCandidates) {
      const btn = page.locator(sel).first();
      if ((await btn.count()) && (await btn.isVisible())) {
        await btn.click({ trial: false }).catch(() => {});
        clicked = true;
        break;
      }
    }
    if (!clicked) break;
    await page.waitForTimeout(250);
    hidden = await page.evaluate(isHiddenInPage, BADGE_SELECTOR);
    assert.equal(hidden, true, `badge deveria continuar oculto após navegação #${i + 1}`);
    advanced++;
  }

  // 4) CLS acumulado precisa ser baixo (limite conservador).
  const cls = await page.evaluate(() => window.__cls || 0);
  assert.ok(cls < 0.1, `CLS ${cls.toFixed(4)} acima do limite (0.1)`);

  console.log(
    `OK — badge oculto no load e em ${advanced} navegações; CLS=${cls.toFixed(4)}`
  );
  await browser.close();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

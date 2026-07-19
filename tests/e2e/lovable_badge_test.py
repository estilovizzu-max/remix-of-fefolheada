"""
E2E: garante que #lovable-badge (e wrappers equivalentes) fica oculto no viewport
mobile durante o carregamento inicial e após navegar entre poemas, sem gerar CLS.

Como rodar (dev server em http://localhost:8080):
    python3 tests/e2e/lovable_badge_test.py

Requer Playwright para Python. Em dev o badge é intencionalmente visível,
então o teste força `hide-lovable-badge` no <html> para simular produção.
"""
import asyncio
import os
import sys
from playwright.async_api import async_playwright

BASE_URL = os.environ.get("E2E_BASE_URL", "http://localhost:8080")
BADGE_SELECTOR = ",".join([
    "#lovable-badge",
    '[id^="lovable-badge"]',
    '[class*="lovable-badge"]',
    "[data-lovable-badge]",
    'a[href*="lovable.dev"][target="_blank"]',
])

IS_HIDDEN_JS = """
(selector) => {
  const els = Array.from(document.querySelectorAll(selector));
  if (els.length === 0) return true;
  return els.every((el) => {
    const s = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return s.display === 'none' || s.visibility === 'hidden' ||
           s.opacity === '0' || r.width === 0 || r.height === 0 ||
           el.hasAttribute('inert');
  });
}
"""

CLS_INIT = """
window.__cls = 0;
new PerformanceObserver((list) => {
  for (const e of list.getEntries()) if (!e.hadRecentInput) window.__cls += e.value;
}).observe({ type: 'layout-shift', buffered: true });
"""

NEXT_SELECTORS = [
    'button[aria-label*="Próxim" i]',
    'button[aria-label*="Next" i]',
    'button:has-text("Próximo")',
    'button:has-text(">")',
]


async def main() -> int:
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 390, "height": 844},
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True,
        )
        await context.add_init_script(CLS_INIT)
        await context.add_init_script(
            "document.documentElement.classList.add('hide-lovable-badge');"
        )

        page = await context.new_page()
        await page.goto(BASE_URL, wait_until="networkidle")

        # 1) Carregamento inicial: badge oculto.
        hidden = await page.evaluate(IS_HIDDEN_JS, BADGE_SELECTOR)
        assert hidden, "badge deveria estar oculto no carregamento inicial"

        # 2) Não recebe foco por Tab.
        await page.keyboard.press("Tab")
        focused_is_badge = await page.evaluate(
            "(sel) => { const a = document.activeElement;"
            " return !!a && a.closest(sel) !== null; }",
            BADGE_SELECTOR,
        )
        assert not focused_is_badge, "badge não deveria receber foco por Tab"

        # 3) Navega entre poemas.
        advanced = 0
        for i in range(5):
            clicked = False
            for sel in NEXT_SELECTORS:
                btn = page.locator(sel).first
                try:
                    if await btn.count() and await btn.is_visible():
                        await btn.click()
                        clicked = True
                        break
                except Exception:
                    continue
            if not clicked:
                break
            await page.wait_for_timeout(250)
            hidden = await page.evaluate(IS_HIDDEN_JS, BADGE_SELECTOR)
            assert hidden, f"badge deveria continuar oculto após navegação #{i + 1}"
            advanced += 1

        # 4) CLS baixo.
        cls = await page.evaluate("window.__cls || 0")
        assert cls < 0.1, f"CLS {cls:.4f} acima do limite (0.1)"

        print(f"OK — badge oculto no load e em {advanced} navegações; CLS={cls:.4f}")
        await browser.close()
        return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))

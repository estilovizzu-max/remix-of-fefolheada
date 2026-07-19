"""
E2E: garante que #lovable-badge fica oculto em múltiplos viewports (retrato e
paisagem), não recebe foco em varredura completa por Tab, e não gera CLS acima
de 0.1 ao navegar entre poemas via botão "Próxima página" do BookReader.

Como rodar (dev server em http://localhost:8080):
    python3 tests/e2e/lovable_badge_test.py

Requer Playwright para Python. Em dev o badge é visível — o teste força
`hide-lovable-badge` no <html> para simular produção.

Códigos de saída: 0 = ok, 1 = falha de asserção.
"""
import asyncio
import os
import sys
from pathlib import Path
from playwright.async_api import async_playwright, Page

BASE_URL = os.environ.get("E2E_BASE_URL", "http://localhost:8080")
CLS_LIMIT = float(os.environ.get("E2E_CLS_LIMIT", "0.1"))
ARTIFACTS_DIR = Path(os.environ.get("E2E_ARTIFACTS_DIR", "test-artifacts/lovable-badge"))
DEBUG = os.environ.get("E2E_DEBUG", "").lower() in ("1", "true", "yes", "on")


BADGE_SELECTOR = ",".join([
    "#lovable-badge",
    '[id^="lovable-badge"]',
    '[id*="lovable-badge"]',
    '[class*="lovable-badge"]',
    "[data-lovable-badge]",
    '[data-testid="lovable-badge"]',
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

RESET_CLS = "window.__cls = 0;"

NEXT_SELECTORS = [
    'button[aria-label="Próxima página"]',
    'button[aria-label*="Próxim" i]',
    'button[aria-label*="Next" i]',
]

VIEWPORTS = [
    # (label, width, height, is_mobile)
    ("mobile-portrait", 390, 844, True),
    ("mobile-landscape", 844, 390, True),
    ("tablet-portrait", 768, 1024, True),
]


class AssertionFail(Exception):
    pass


def check(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionFail(message)


async def assert_badge_hidden(page: Page, ctx: str) -> None:
    hidden = await page.evaluate(IS_HIDDEN_JS, BADGE_SELECTOR)
    check(hidden, f"[{ctx}] badge deveria estar oculto")


async def tab_sweep_no_badge_focus(page: Page, ctx: str, max_tabs: int = 80) -> None:
    """Varredura completa: pressiona Tab até o foco voltar ao body ou repetir."""
    await page.evaluate("document.body.focus()")
    seen = set()
    for i in range(max_tabs):
        await page.keyboard.press("Tab")
        info = await page.evaluate(
            "(sel) => { const a = document.activeElement;"
            " if (!a || a === document.body) return { tag: 'BODY', badge: false, key: 'body' };"
            " const badge = a.closest(sel) !== null;"
            " const key = a.tagName + '#' + (a.id || '') + '.' + (a.className || '').toString().slice(0,40);"
            " return { tag: a.tagName, badge, key }; }",
            BADGE_SELECTOR,
        )
        check(
            not info["badge"],
            f"[{ctx}] Tab #{i+1} focou elemento do badge ({info['key']})",
        )
        if info["key"] in seen and info["key"] != "body":
            break
        seen.add(info["key"])


async def click_no_badge_hits(page: Page, ctx: str) -> None:
    """Se houver elementos do badge no DOM, garante que clicar neles não dispara."""
    count = await page.locator(BADGE_SELECTOR).count()
    if count == 0:
        return
    fired = await page.evaluate(
        """(sel) => {
          let hits = 0;
          const els = document.querySelectorAll(sel);
          els.forEach((el) => {
            const handler = () => { hits += 1; };
            el.addEventListener('click', handler, true);
            try { el.click(); } catch (_) {}
            el.removeEventListener('click', handler, true);
          });
          return hits;
        }""",
        BADGE_SELECTOR,
    )
    check(fired == 0, f"[{ctx}] badge recebeu {fired} clique(s) programáticos")


async def next_page_locator(page: Page):
    for sel in NEXT_SELECTORS:
        loc = page.locator(sel)
        count = await loc.count()
        for i in range(count):
            item = loc.nth(i)
            try:
                if await item.is_visible():
                    return item
            except Exception:
                continue
    return None


async def capture_failure_artifacts(page: Page, context, out_dir: Path, label: str, error: str) -> None:
    """Salva screenshot, HTML e destaque do badge para inspeção rápida."""
    out_dir.mkdir(parents=True, exist_ok=True)
    try:
        await page.screenshot(path=str(out_dir / f"{label}_failure.png"))
    except Exception as exc:
        print(f"WARN não foi possível capturar screenshot: {exc}")
    try:
        html = await page.content()
        (out_dir / f"{label}_dom.html").write_text(html, encoding="utf-8")
    except Exception as exc:
        print(f"WARN não foi possível salvar HTML: {exc}")
    try:
        # Destaca o badge para tornar o problema visível no screenshot anotado.
        await page.evaluate(
            """(sel) => {
              document.querySelectorAll(sel).forEach((el) => {
                el.style.setProperty('outline', '4px solid #ff0055', 'important');
                el.style.setProperty('outline-offset', '2px', 'important');
              });
            }""",
            BADGE_SELECTOR,
        )
        await page.screenshot(path=str(out_dir / f"{label}_failure_annotated.png"))
    except Exception:
        pass
    (out_dir / f"{label}_error.txt").write_text(f"{label}\n{error}\n", encoding="utf-8")


async def debug_capture(page: Page, out_dir: Path, label: str, step: str) -> None:
    """Modo debug: registra print + HTML do DOM em cada passo, mesmo em sucesso.

    Artefatos ficam em `<viewport>/debug/NN_step.{png,html}` para inspeção
    posterior no CI quando uma tentativa passar mas houver interesse em auditar
    o comportamento intermediário (ex.: instabilidade entre retries).
    """
    if not DEBUG:
        return
    debug_dir = out_dir / "debug"
    debug_dir.mkdir(parents=True, exist_ok=True)
    # Prefixo numérico preserva ordem cronológica no filesystem.
    idx = getattr(debug_capture, "_counters", {}).setdefault(str(debug_dir), 0) + 1
    if not hasattr(debug_capture, "_counters"):
        debug_capture._counters = {}
    debug_capture._counters[str(debug_dir)] = idx
    prefix = f"{idx:02d}_{step}"
    try:
        await page.screenshot(path=str(debug_dir / f"{prefix}.png"))
    except Exception as exc:
        print(f"WARN [debug {label} {step}] screenshot: {exc}")
    try:
        html = await page.content()
        (debug_dir / f"{prefix}.html").write_text(html, encoding="utf-8")
    except Exception as exc:
        print(f"WARN [debug {label} {step}] html: {exc}")
    try:
        info = await page.evaluate(
            """(sel) => {
              const els = Array.from(document.querySelectorAll(sel));
              return {
                url: location.href,
                cls: window.__cls || 0,
                badgeCount: els.length,
                badges: els.slice(0, 5).map((el) => {
                  const s = getComputedStyle(el);
                  const r = el.getBoundingClientRect();
                  return {
                    tag: el.tagName,
                    id: el.id || null,
                    cls: (el.className || '').toString().slice(0, 120),
                    display: s.display,
                    visibility: s.visibility,
                    opacity: s.opacity,
                    rect: { w: r.width, h: r.height, x: r.x, y: r.y },
                    inert: el.hasAttribute('inert'),
                    tabindex: el.getAttribute('tabindex'),
                  };
                }),
              };
            }""",
            BADGE_SELECTOR,
        )
        import json as _json
        (debug_dir / f"{prefix}.json").write_text(
            _json.dumps(info, indent=2, ensure_ascii=False), encoding="utf-8"
        )
    except Exception as exc:
        print(f"WARN [debug {label} {step}] state: {exc}")


async def run_viewport(pw, label: str, width: int, height: int, is_mobile: bool) -> None:
    ctx = f"{label} {width}x{height}"
    viewport_dir = ARTIFACTS_DIR / label
    video_dir = viewport_dir / "video"
    video_dir.mkdir(parents=True, exist_ok=True)

    browser = await pw.chromium.launch(headless=True)
    context = await browser.new_context(
        viewport={"width": width, "height": height},
        device_scale_factor=2 if is_mobile else 1,
        is_mobile=is_mobile,
        has_touch=is_mobile,
        record_video_dir=str(video_dir),
        record_video_size={"width": width, "height": height},
    )
    await context.tracing.start(screenshots=True, snapshots=True, sources=True)
    await context.add_init_script(CLS_INIT)
    await context.add_init_script(
        "document.documentElement.classList.add('hide-lovable-badge');"
    )

    page = await context.new_page()
    failure: Exception | None = None
    advanced = 0
    cls = 0.0
    try:
        await page.goto(BASE_URL, wait_until="networkidle")
        await debug_capture(page, viewport_dir, label, "load")

        # 1) Carregamento inicial.
        await assert_badge_hidden(page, f"{ctx} inicial")
        await debug_capture(page, viewport_dir, label, "after_initial_assert")

        # 2) Varredura Tab completa: nenhum elemento do badge recebe foco.
        await tab_sweep_no_badge_focus(page, ctx)
        await debug_capture(page, viewport_dir, label, "after_tab_sweep")

        # 3) Clique programático em elementos do badge não dispara handler.
        await click_no_badge_hits(page, ctx)
        await debug_capture(page, viewport_dir, label, "after_click_sweep")

        # 4) Navegação: clica em "Próxima página" e valida ocultação + CLS.
        await page.evaluate(RESET_CLS)
        for i in range(6):
            loc = await next_page_locator(page)
            if not loc:
                loc = page.locator('button[aria-label="Próxima página"]').first
                if not (await loc.count() and await loc.is_visible()):
                    break
            await debug_capture(page, viewport_dir, label, f"nav{i+1:02d}_before")
            try:
                await loc.click()
            except Exception:
                break
            await page.wait_for_timeout(350)
            await debug_capture(page, viewport_dir, label, f"nav{i+1:02d}_after")
            await assert_badge_hidden(page, f"{ctx} após navegação #{i+1}")
            advanced += 1

        cls = await page.evaluate("window.__cls || 0")
        check(
            cls < CLS_LIMIT,
            f"[{ctx}] CLS {cls:.4f} acima do limite ({CLS_LIMIT})",
        )
        print(f"OK [{ctx}] — {advanced} navegações; CLS={cls:.4f}")
    except Exception as exc:
        failure = exc
        await capture_failure_artifacts(page, context, viewport_dir, label, str(exc))
        print(f"FAIL [{ctx}] artefatos em {viewport_dir}")
    finally:
        keep_trace = failure is not None or DEBUG
        try:
            trace_path = viewport_dir / "trace.zip" if keep_trace else None
            await context.tracing.stop(path=str(trace_path) if trace_path else None)
        except Exception:
            pass
        video_path = None
        try:
            if page.video:
                video_path = await page.video.path()
        except Exception:
            video_path = None
        await context.close()
        await browser.close()
        keep_video = failure is not None or DEBUG
        if keep_video and video_path:
            try:
                dest = viewport_dir / "video.webm"
                Path(video_path).replace(dest)
                print(f"  vídeo: {dest}")
            except Exception:
                pass
        elif video_path:
            # Sucesso sem debug: descarta o vídeo para não poluir artefatos.
            try:
                Path(video_path).unlink(missing_ok=True)
            except Exception:
                pass

    if failure:
        raise failure


async def main() -> int:
    ARTIFACTS_DIR.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as pw:
        for label, w, h, mobile in VIEWPORTS:
            await run_viewport(pw, label, w, h, mobile)
    return 0


if __name__ == "__main__":
    try:
        sys.exit(asyncio.run(main()))
    except AssertionFail as exc:
        print(f"FAIL — {exc}")
        print(f"Artefatos disponíveis em: {ARTIFACTS_DIR}")
        sys.exit(1)
    except Exception as exc:
        print(f"ERROR — {exc}")
        print(f"Artefatos disponíveis em: {ARTIFACTS_DIR}")
        sys.exit(1)


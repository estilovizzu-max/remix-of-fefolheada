"""
Gera um relatório HTML único indexando tentativas, viewports, passos de debug
e artefatos de falha do Playwright, para inspeção rápida no navegador.

Uso:
    python3 tests/e2e/build_report.py [--root test-artifacts] [--out test-artifacts/report.html]

Varre diretórios `lovable-badge-attempt-*/` (uma tentativa cada) e/ou
`lovable-badge/` (última promovida). Para cada viewport lista:
- artefatos de falha (`*_failure.png`, `*_failure_annotated.png`, `*_dom.html`, `*_error.txt`)
- vídeo (`video.webm`) e trace (`trace.zip`)
- passos de debug (`debug/NN_step.{png,html,json}`) em ordem cronológica

Todos os links são relativos ao arquivo HTML gerado, então basta abrir o
`report.html` localmente (ou baixar o artefato do CI e abrir).
"""
from __future__ import annotations

import argparse
import html
import json
import os
import re
from pathlib import Path


STEP_RE = re.compile(r"^(\d{2})_(.+?)\.(png|html|json)$")


def rel(target: Path, base: Path) -> str:
    return os.path.relpath(target, base).replace(os.sep, "/")


def collect_steps(debug_dir: Path) -> list[dict]:
    if not debug_dir.is_dir():
        return []
    grouped: dict[str, dict] = {}
    for f in sorted(debug_dir.iterdir()):
        m = STEP_RE.match(f.name)
        if not m:
            continue
        idx, name, ext = m.groups()
        key = f"{idx}_{name}"
        entry = grouped.setdefault(key, {"idx": int(idx), "name": name})
        entry[ext] = f
    return sorted(grouped.values(), key=lambda e: e["idx"])


def collect_failures(vp_dir: Path) -> list[Path]:
    return sorted(
        p for p in vp_dir.glob("*")
        if p.is_file() and (
            p.name.endswith("_failure.png")
            or p.name.endswith("_failure_annotated.png")
            or p.name.endswith("_dom.html")
            or p.name.endswith("_error.txt")
        )
    )


def render_viewport(vp_dir: Path, out_base: Path) -> str:
    label = vp_dir.name
    failures = collect_failures(vp_dir)
    steps = collect_steps(vp_dir / "debug")
    video = vp_dir / "video.webm"
    trace = vp_dir / "trace.zip"

    status = "fail" if failures else ("debug" if steps else "ok")
    badge = {
        "fail": '<span class="badge fail">FALHA</span>',
        "debug": '<span class="badge debug">DEBUG</span>',
        "ok": '<span class="badge ok">OK</span>',
    }[status]

    parts = [f'<section class="vp"><h3>{html.escape(label)} {badge}</h3>']

    extras = []
    if video.exists():
        extras.append(f'<a href="{rel(video, out_base)}">video.webm</a>')
    if trace.exists():
        extras.append(f'<a href="{rel(trace, out_base)}">trace.zip</a>')
    if extras:
        parts.append('<p class="extras">' + " · ".join(extras) + "</p>")

    if failures:
        parts.append('<h4>Falhas</h4><div class="grid">')
        for f in failures:
            href = rel(f, out_base)
            if f.suffix == ".png":
                parts.append(
                    f'<figure><a href="{href}" target="_blank">'
                    f'<img loading="lazy" src="{href}" alt="{html.escape(f.name)}"></a>'
                    f'<figcaption>{html.escape(f.name)}</figcaption></figure>'
                )
            else:
                parts.append(
                    f'<figure class="doc"><a href="{href}" target="_blank">{html.escape(f.name)}</a></figure>'
                )
        parts.append("</div>")

    if steps:
        parts.append(f'<h4>Passos de debug ({len(steps)})</h4><div class="grid">')
        for s in steps:
            title = f'{s["idx"]:02d} · {s["name"]}'
            links = []
            for k in ("html", "json"):
                if k in s:
                    links.append(f'<a href="{rel(s[k], out_base)}" target="_blank">{k}</a>')
            meta = ""
            if "json" in s:
                try:
                    data = json.loads(s["json"].read_text(encoding="utf-8"))
                    cls = data.get("cls", 0)
                    bc = data.get("badgeCount", 0)
                    meta = f'<small>CLS={cls:.4f} · badge={bc}</small>'
                except Exception:
                    pass
            if "png" in s:
                href = rel(s["png"], out_base)
                parts.append(
                    f'<figure><a href="{href}" target="_blank">'
                    f'<img loading="lazy" src="{href}" alt="{html.escape(title)}"></a>'
                    f'<figcaption>{html.escape(title)}'
                    + (f' · {" · ".join(links)}' if links else "")
                    + (f'<br>{meta}' if meta else "")
                    + "</figcaption></figure>"
                )
            else:
                parts.append(
                    f'<figure class="doc"><strong>{html.escape(title)}</strong>'
                    + (f' — {" · ".join(links)}' if links else "")
                    + (f'<br>{meta}' if meta else "")
                    + "</figure>"
                )
        parts.append("</div>")

    if not failures and not steps:
        parts.append('<p class="empty">Sem artefatos.</p>')

    parts.append("</section>")
    return "\n".join(parts)


def render_attempt(att_dir: Path, out_base: Path) -> str:
    vps = sorted(p for p in att_dir.iterdir() if p.is_dir())
    body = "\n".join(render_viewport(vp, out_base) for vp in vps) or "<p>Sem viewports.</p>"
    return f'<article class="attempt"><h2>{html.escape(att_dir.name)}</h2>{body}</article>'


def build(root: Path, out: Path) -> None:
    out_base = out.parent.resolve()
    root = root.resolve()
    attempts = sorted([p for p in root.glob("lovable-badge-attempt-*") if p.is_dir()])
    promoted = root / "lovable-badge"
    dirs: list[Path] = []
    if promoted.is_dir():
        dirs.append(promoted)
    dirs.extend(attempts)

    if not dirs:
        content = "<p>Nenhum artefato encontrado.</p>"
    else:
        content = "\n".join(render_attempt(d, out_base) for d in dirs)

    html_doc = f"""<!doctype html>
<html lang="pt-BR"><head>
<meta charset="utf-8">
<title>Relatório E2E — Lovable badge</title>
<style>
  :root {{ color-scheme: light dark; }}
  body {{ font: 14px/1.5 -apple-system, Segoe UI, Roboto, sans-serif; margin: 0; padding: 24px; max-width: 1400px; margin-inline: auto; }}
  h1 {{ margin: 0 0 8px; }}
  h2 {{ margin-top: 32px; border-bottom: 2px solid #8884; padding-bottom: 4px; }}
  h3 {{ margin: 20px 0 8px; }}
  h4 {{ margin: 16px 0 8px; color: #666; text-transform: uppercase; font-size: 12px; letter-spacing: .05em; }}
  .grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }}
  figure {{ margin: 0; padding: 8px; border: 1px solid #8884; border-radius: 6px; background: #fff2; }}
  figure img {{ width: 100%; height: auto; display: block; border-radius: 4px; }}
  figcaption {{ font-size: 12px; margin-top: 6px; word-break: break-word; }}
  figure.doc {{ display: flex; flex-direction: column; gap: 4px; font-size: 13px; }}
  .badge {{ display: inline-block; font-size: 11px; padding: 2px 8px; border-radius: 999px; margin-left: 8px; vertical-align: middle; }}
  .badge.ok {{ background: #16a34a; color: #fff; }}
  .badge.fail {{ background: #dc2626; color: #fff; }}
  .badge.debug {{ background: #2563eb; color: #fff; }}
  .attempt {{ margin-bottom: 40px; }}
  .extras a {{ margin-right: 12px; }}
  .empty {{ color: #888; font-style: italic; }}
  small {{ color: #666; }}
</style>
</head><body>
<h1>Relatório E2E — Lovable badge</h1>
<p>Índice de tentativas, viewports, artefatos de falha e passos de debug. Abra este arquivo diretamente no navegador.</p>
{content}
</body></html>
"""
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html_doc, encoding="utf-8")
    print(f"Relatório gerado: {out}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default="test-artifacts", help="Diretório raiz dos artefatos")
    ap.add_argument("--out", default="test-artifacts/report.html", help="Arquivo HTML de saída")
    args = ap.parse_args()
    build(Path(args.root), Path(args.out))


if __name__ == "__main__":
    main()

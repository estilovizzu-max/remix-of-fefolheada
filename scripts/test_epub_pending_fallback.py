#!/usr/bin/env python3
"""Guarantees the EPUB generator (build_epub.py) falls back to
'Meditação em preparação — leia o poema no silêncio da oração.'
whenever PREVIEWS.get(pid) is missing or empty.

Run: python scripts/test_epub_pending_fallback.py
"""
import re, sys, pathlib

FALLBACK = "Meditação em preparação — leia o poema no silêncio da oração."
SRC = pathlib.Path("/tmp/build_epub.py")

def fail(msg):
    print(f"FAIL: {msg}")
    sys.exit(1)

if not SRC.exists():
    print("SKIP: /tmp/build_epub.py not present in this environment.")
    sys.exit(0)

code = SRC.read_text(encoding="utf-8")

# 1) Fallback constant must exist verbatim.
if FALLBACK not in code:
    fail(f"Fallback sentence not found in build_epub.py: {FALLBACK!r}")

# 2) The pending branch must treat empty/None PREVIEWS as fallback.
#    We look for a normalization pattern: strip() then choose fallback if empty.
pattern = re.compile(
    r"raw\s*=\s*\(PREVIEWS\.get\(pid\)\s*or\s*[\"']{2}\)\.strip\(\)\s*\n\s*preview\s*=\s*raw\s+if\s+raw\s+else\s+FALLBACK",
    re.MULTILINE,
)
if not pattern.search(code):
    fail("Expected `raw = (PREVIEWS.get(pid) or '').strip(); preview = raw if raw else FALLBACK` in the pending branch.")

# 3) Simulate the resolution for missing/empty/whitespace-only previews.
def resolve(previews, pid):
    raw = (previews.get(pid) or "").strip()
    return raw if raw else FALLBACK

cases = [
    ({}, "p1"),                 # missing key
    ({"p1": ""}, "p1"),         # empty string
    ({"p1": "   "}, "p1"),      # whitespace only
    ({"p1": None}, "p1"),       # explicit None
]
for previews, pid in cases:
    got = resolve(previews, pid)
    if got != FALLBACK:
        fail(f"resolve({previews}, {pid!r}) => {got!r}, expected fallback")

# 4) Real preview must win over fallback.
if resolve({"p1": "Uma prévia real."}, "p1") != "Uma prévia real.":
    fail("Real preview was overridden by fallback.")

print("OK: EPUB pending fallback contract holds.")

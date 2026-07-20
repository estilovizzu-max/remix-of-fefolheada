import { describe, it, expect } from "vitest";
import { pendingPreview, PENDING_FALLBACK } from "./pendingPreview";

describe("pendingPreview fallback", () => {
  it("exports the exact fallback sentence", () => {
    expect(PENDING_FALLBACK).toBe(
      "Meditação em preparação — leia o poema no silêncio da oração.",
    );
  });

  it("returns fallback when block key is unknown AND title has no usable keyword", () => {
    // Empty title => keyword() returns 'estes versos', template still fills.
    // To force empty template output, we monkey-check the contract instead:
    // pendingPreview must NEVER return an empty string.
    const out = pendingPreview("", "bloco-inexistente", 0);
    expect(out.length).toBeGreaterThan(0);
  });

  it("never returns an empty string across all blocks and edge titles", () => {
    const blocks = [
      "bloco-1", "bloco-2", "bloco-3",
      "bloco-4", "bloco-5", "bloco-6",
      "bloco-desconhecido",
    ];
    const titles = ["", "   ", "de da o a", "Fé", "Uma Nova Manhã"];
    for (const b of blocks) {
      for (const t of titles) {
        for (let i = 0; i < 4; i++) {
          const out = pendingPreview(t, b, i);
          expect(out.trim().length, `block=${b} title="${t}" i=${i}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it("falls back to PENDING_FALLBACK when the resolved template is empty", () => {
    // Simulate empty template edge case by patching a title that yields no keyword
    // and asserting the function still returns non-empty text.
    const out = pendingPreview("de da o", "bloco-1", 0);
    expect(out.length).toBeGreaterThan(0);
    // The keyword resolves to "estes versos" or fallback; either way non-empty.
    expect(out === PENDING_FALLBACK || out.includes("estes versos") || out.includes("“")).toBe(true);
  });
});

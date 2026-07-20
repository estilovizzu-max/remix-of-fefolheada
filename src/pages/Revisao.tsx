import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { diffLines, type Change } from "diff";
import { revisions } from "@/data/revisions";
import { Button } from "@/components/ui/button";

type Mode = "diff" | "before" | "after";

const Revisao = () => {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("diff");

  const current = revisions[index];
  const changes: Change[] = useMemo(
    () => diffLines(current.before + "\n", current.after + "\n"),
    [current]
  );
  const hasChanges = changes.some((c) => c.added || c.removed);

  const beforeLines = current.before.split("\n").length;
  const afterLines = current.after.split("\n").length;

  const goPrev = () => setIndex((i) => (i - 1 + revisions.length) % revisions.length);
  const goNext = () => setIndex((i) => (i + 1) % revisions.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-card/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="font-serif text-2xl text-primary">Revisão v2</h1>
            <p className="text-xs text-muted-foreground">
              43 poemas revisados · antes vs depois
            </p>
          </div>
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Voltar ao início
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[260px_1fr]">
        {/* Lista lateral */}
        <aside className="rounded-lg border border-border/60 bg-card/40 p-2 md:max-h-[80vh] md:overflow-y-auto">
          <ol className="space-y-1">
            {revisions.map((r, i) => (
              <li key={r.id || i}>
                <button
                  onClick={() => setIndex(i)}
                  className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${
                    i === index
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <span className="mr-2 text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
                  {r.title}
                </button>
              </li>
            ))}
          </ol>
        </aside>

        {/* Painel principal */}
        <main className="rounded-lg border border-border/60 bg-card p-6">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-serif text-3xl text-primary">{current.title}</h2>
              <p className="text-sm italic text-muted-foreground">{current.block}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Versos: {beforeLines} → {afterLines}
                {!hasChanges && " · sem alterações textuais (só normalização silenciosa)"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={goPrev}>← Anterior</Button>
              <span className="self-center text-xs text-muted-foreground">
                {index + 1} / {revisions.length}
              </span>
              <Button variant="outline" size="sm" onClick={goNext}>Próximo →</Button>
            </div>
          </div>

          <div className="mb-4 flex gap-2 border-b border-border/60 pb-3">
            {(["diff", "before", "after"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {m === "diff" ? "Diff" : m === "before" ? "Antes" : "Depois"}
              </button>
            ))}
          </div>

          <div className="font-serif text-[15px] leading-relaxed">
            {mode === "before" && (
              <pre className="whitespace-pre-wrap font-serif">{current.before}</pre>
            )}
            {mode === "after" && (
              <pre className="whitespace-pre-wrap font-serif">{current.after}</pre>
            )}
            {mode === "diff" && (
              <div className="space-y-0.5">
                {!hasChanges && (
                  <p className="mb-3 italic text-muted-foreground">
                    Sem alterações textuais visíveis — apenas normalização silenciosa.
                  </p>
                )}
                {changes.map((c, i) => {
                  const lines = c.value.replace(/\n$/, "").split("\n");
                  return lines.map((line, j) => {
                    const key = `${i}-${j}`;
                    if (c.added) {
                      return (
                        <div
                          key={key}
                          className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-700 dark:text-emerald-300"
                        >
                          <span className="mr-2 select-none opacity-60">+</span>
                          {line || "\u00A0"}
                        </div>
                      );
                    }
                    if (c.removed) {
                      return (
                        <div
                          key={key}
                          className="rounded bg-rose-500/10 px-2 py-0.5 text-rose-700 line-through dark:text-rose-300"
                        >
                          <span className="mr-2 select-none opacity-60">−</span>
                          {line || "\u00A0"}
                        </div>
                      );
                    }
                    return (
                      <div key={key} className="px-2 py-0.5 text-muted-foreground">
                        <span className="mr-2 select-none opacity-40">·</span>
                        {line || "\u00A0"}
                      </div>
                    );
                  });
                })}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Revisao;

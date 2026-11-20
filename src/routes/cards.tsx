import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { VOCAB } from "@/data/vocab";
import { speakEnglish } from "@/lib/speak";

export const Route = createFileRoute("/cards")({ component: CardsPage });

function CardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const item = VOCAB[index];

  function go(next: number) {
    setFlipped(false);
    setIndex((next + VOCAB.length) % VOCAB.length);
  }

  return (
    <AppShell>
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">Карточки</p>
      <h1 className="mt-1 font-display text-4xl">Переверни и вспомни перевод</h1>
      <p className="mt-2 text-muted">
        {index + 1} / {VOCAB.length}
      </p>

      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="mt-6 flex min-h-72 w-full max-w-xl flex-col items-center justify-center rounded-3xl border border-line bg-surface p-8 text-center shadow-sm"
      >
        {flipped ? (
          <>
            <p className="font-display text-3xl text-teal-deep">{item.translation}</p>
            <p className="mt-4 max-w-md text-muted">{item.example}</p>
          </>
        ) : (
          <>
            <p className="font-display text-4xl">{item.word}</p>
            <p className="mt-2 text-muted">{item.phonetic}</p>
            <p className="mt-6 text-sm text-muted">Нажми, чтобы увидеть перевод</p>
          </>
        )}
      </button>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => go(index - 1)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold">
          <ChevronLeft size={18} aria-hidden /> Назад
        </button>
        <button type="button" onClick={() => speakEnglish(item.word)} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-teal px-4 font-semibold text-surface">
          <Volume2 size={18} aria-hidden /> Произнести
        </button>
        <button type="button" onClick={() => go(index + 1)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold">
          Вперёд <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </AppShell>
  );
}

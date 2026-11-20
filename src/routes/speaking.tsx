import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Volume2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Recorder } from "@/components/recorder";
import { PART1, type SpeakItem } from "@/data/speaking";
import { PART2 } from "@/data/speaking-p2";
import { PART2B } from "@/data/speaking-p2b";
import { PART3 } from "@/data/speaking-p3";
import { speakEnglish } from "@/lib/speak";

export const Route = createFileRoute("/speaking")({ component: SpeakingPage });

const BANKS: { id: number; label: string; hint: string; items: SpeakItem[]; max: number }[] = [
  {
    id: 1,
    label: "Part 1",
    hint: "Короткие вопросы о себе. Ответь в 3–5 предложениях, потом сверься с примером C1.",
    items: PART1,
    max: 60,
  },
  {
    id: 2,
    label: "Part 2",
    hint: "Карточка: минута на подготовку и до двух минут связной речи.",
    items: [...PART2, ...PART2B],
    max: 120,
  },
  {
    id: 3,
    label: "Part 3",
    hint: "Обсуждение. Нужны причина, пример и оговорка, не одно предложение.",
    items: PART3,
    max: 90,
  },
];

function SpeakingPage() {
  const [part, setPart] = useState(0);
  const [index, setIndex] = useState(0);
  const [showSample, setShowSample] = useState(false);
  const [query, setQuery] = useState("");
  const bank = BANKS[part];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return bank.items.map((item, i) => ({ item, i }));
    return bank.items
      .map((item, i) => ({ item, i }))
      .filter(({ item }) => `${item.topic} ${item.prompt}`.toLowerCase().includes(q));
  }, [bank, query]);

  const safeFilteredIndex = Math.min(index, Math.max(filtered.length - 1, 0));
  const current = filtered[safeFilteredIndex];

  useEffect(() => {
    setShowSample(false);
  }, [part, safeFilteredIndex, query]);

  function changePart(next: number) {
    setPart(next);
    setIndex(0);
    setQuery("");
    setShowSample(false);
  }

  function move(delta: number) {
    if (!filtered.length) return;
    setIndex((i) => {
      const cur = Math.min(i, filtered.length - 1);
      return (cur + delta + filtered.length) % filtered.length;
    });
  }

  return (
    <AppShell>
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">IELTS Speaking</p>
      <h1 className="mt-1 font-display text-4xl">Запиши ответ и сравни с C1</h1>
      <p className="mt-2 max-w-2xl text-muted">{bank.hint}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {BANKS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => changePart(i)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
              i === part ? "bg-teal text-surface" : "bg-surface text-muted ring-1 ring-line"
            }`}
          >
            {item.label}
            <span className="ml-2 text-xs opacity-80">{item.items.length}</span>
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Поиск вопроса</span>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          placeholder="Найти вопрос или тему"
          className="min-h-12 w-full rounded-2xl border border-line bg-surface px-4 outline-none"
        />
      </label>

      {current ? (
        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted">
            {safeFilteredIndex + 1} / {filtered.length}
            {query ? ` · всего в части ${bank.items.length}` : ""}
          </p>
          <article className="rounded-3xl border border-line bg-surface p-5 sm:p-7">
            <p className="text-sm font-semibold text-teal">{current.item.topic}</p>
            <h2 className="mt-2 font-display text-3xl leading-tight">{current.item.prompt}</h2>
            {current.item.points && (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                {current.item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => speakEnglish(spokenPrompt(current.item))}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold"
              >
                <Volume2 size={16} aria-hidden />
                Прослушать вопрос
              </button>
              <button
                type="button"
                onClick={() => setShowSample((v) => !v)}
                className="inline-flex min-h-11 items-center rounded-full bg-teal-soft px-4 text-sm font-semibold text-teal-deep"
              >
                {showSample ? "Скрыть пример" : "Пример ответа C1"}
              </button>
            </div>
            {part === 1 && <PrepTimer />}
          </article>

          {showSample && (
            <section className="rounded-2xl border border-teal bg-teal-soft p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-teal-deep">Пример уровня C1</h3>
                <button
                  type="button"
                  onClick={() => speakEnglish(current.item.sample)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-surface px-3 text-sm font-semibold"
                >
                  <Volume2 size={16} aria-hidden />
                  Прослушать пример
                </button>
              </div>
              <p className="mt-3 leading-relaxed">{current.item.sample}</p>
            </section>
          )}

          <Recorder resetKey={current.item.id} maxSeconds={bank.max} />

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold"
            >
              <ChevronLeft size={18} aria-hidden /> Предыдущий
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 font-semibold"
            >
              Следующий <ChevronRight size={18} aria-hidden />
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-muted">Ничего не найдено. Попробуй другое слово.</p>
      )}
    </AppShell>
  );
}

function spokenPrompt(item: SpeakItem) {
  if (!item.points?.length) return item.prompt;
  return `${item.prompt} You should say: ${item.points.join(". ")}`;
}

function PrepTimer() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    if (left === null) return;
    if (left <= 0) return;
    const id = window.setTimeout(() => setLeft(left - 1), 1000);
    return () => window.clearTimeout(id);
  }, [left]);

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => setLeft(60)}
        className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-surface"
      >
        Таймер подготовки 60 с
      </button>
      {left !== null && (
        <span className="font-display text-2xl">{left === 0 ? "Говори" : `${left} с`}</span>
      )}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Search, Volume2 } from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { LEVELS, VOCAB, type Vocab } from "@/data/vocab";
import { speakEnglish } from "@/lib/speak";

export const Route = createFileRoute("/")({ component: DictionaryPage });

function DictionaryPage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<(typeof LEVELS)[number]>("all");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VOCAB.filter((item) => {
      if (level !== "all" && item.level !== level) return false;
      if (!q) return true;
      return (
        item.word.toLowerCase().includes(q) ||
        item.translation.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q)
      );
    });
  }, [query, level]);

  return (
    <AppShell>
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">Словарь</p>
      <h1 className="mt-1 font-display text-4xl text-ink">Слова с переводом и голосом</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Уровни от A2 до C2. Нажми на карточку или на кнопку, чтобы услышать слово.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="flex min-h-12 flex-1 items-center gap-2 rounded-2xl border border-line bg-surface px-3">
          <Search size={18} className="text-muted" aria-hidden />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Слово по-английски или по-русски"
            className="w-full bg-transparent py-3 outline-none"
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {LEVELS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLevel(item)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
              level === item ? "bg-teal text-surface" : "bg-surface text-muted ring-1 ring-line"
            }`}
          >
            {item === "all" ? "Все" : item}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted">{items.length} слов</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <WordCard key={item.word} item={item} />
        ))}
      </div>
    </AppShell>
  );
}

function WordCard({ item }: { item: Vocab }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl">{item.word}</h2>
          <p className="text-sm text-muted">{item.phonetic}</p>
        </div>
        <span className="rounded-full bg-teal-soft px-2 py-1 text-xs font-bold text-teal-deep">{item.level}</span>
      </div>
      <p className="mt-3 font-semibold text-teal-deep">{item.translation}</p>
      <p className="mt-1 text-sm text-muted">{item.example}</p>
      <button
        type="button"
        onClick={() => speakEnglish(item.word)}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-3 text-sm font-semibold"
      >
        <Volume2 size={16} aria-hidden />
        Произнести
      </button>
    </article>
  );
}

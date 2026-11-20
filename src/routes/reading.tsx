import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { PASSAGES, type ReadingQuestion, type Verdict } from "@/data/reading";
import { speakEnglish } from "@/lib/speak";

export const Route = createFileRoute("/reading")({ component: ReadingPage });

type AnswerMap = Record<string, string>;

function ReadingPage() {
  const [part, setPart] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [checked, setChecked] = useState(false);
  const passage = PASSAGES[part];

  function selectPart(index: number) {
    setPart(index);
    setAnswers({});
    setChecked(false);
  }

  function setAnswer(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setChecked(false);
  }

  const score = useMemo(() => {
    if (!checked) return null;
    let correct = 0;
    passage.questions.forEach((q, i) => {
      if (answers[keyOf(i)] === expected(q)) correct += 1;
    });
    return correct;
  }, [checked, answers, passage]);

  const fullText = passage.paragraphs.map((p) => p.text).join(" ");

  return (
    <AppShell>
      <p className="text-sm font-semibold uppercase tracking-wide text-teal">IELTS Reading</p>
      <h1 className="mt-1 font-display text-4xl">Тексты и вопросы</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Шесть частей. В каждой 12 вопросов: True / False / Not Given, matching headings или multiple choice.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {PASSAGES.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => selectPart(index)}
            className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
              index === part ? "bg-teal text-surface" : "bg-surface text-muted ring-1 ring-line"
            }`}
          >
            Part {item.part}
          </button>
        ))}
      </div>

      <article className="mt-6 rounded-3xl border border-line bg-surface p-5 sm:p-8">
        <p className="text-sm font-semibold text-teal">{passage.focus}</p>
        <h2 className="mt-1 font-display text-3xl">{passage.title}</h2>
        <div className="mt-5 space-y-4 font-display text-lg leading-relaxed">
          {passage.paragraphs.map((paragraph) => (
            <p key={paragraph.label ?? paragraph.text.slice(0, 12)}>
              {paragraph.label && <strong className="mr-2 font-sans text-sm text-teal">{paragraph.label}</strong>}
              {paragraph.text}
            </p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => speakEnglish(fullText)}
          className="mt-5 inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold"
        >
          Прослушать текст
        </button>
      </article>

      {passage.headings && (
        <section className="mt-4 rounded-2xl border border-line bg-warn-soft p-4">
          <h3 className="font-semibold">List of headings</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {passage.headings.map((heading) => (
              <li key={heading}>{heading}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-6 space-y-3">
        {passage.questions.map((question, index) => (
          <QuestionBlock
            key={`${passage.id}-${index}`}
            index={index}
            question={question}
            headings={passage.headings}
            value={answers[keyOf(index)] ?? ""}
            checked={checked}
            onChange={(value) => setAnswer(keyOf(index), value)}
          />
        ))}
      </section>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setChecked(true)}
          className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 font-semibold text-surface"
        >
          Проверить ответы
        </button>
        {score !== null && (
          <p className="font-semibold">
            {score} / {passage.questions.length}
          </p>
        )}
      </div>
    </AppShell>
  );
}

function keyOf(index: number) {
  return String(index);
}

function expected(question: ReadingQuestion) {
  if (question.kind === "tfng") return question.answer;
  return String(question.answer);
}

function QuestionBlock({
  index,
  question,
  headings,
  value,
  checked,
  onChange,
}: {
  index: number;
  question: ReadingQuestion;
  headings?: string[];
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}) {
  const right = expected(question);
  const state = !checked || !value ? "" : value === right ? "ok" : "bad";
  const shell =
    state === "ok" ? "border-ok bg-ok-soft" : state === "bad" ? "border-bad bg-bad-soft" : "border-line bg-surface";

  return (
    <div className={`rounded-2xl border p-4 ${shell}`}>
      <p className="font-semibold">
        {index + 1}.{" "}
        {question.kind === "heading"
          ? `Paragraph ${question.paragraph} — choose the heading`
          : question.kind === "tfng"
            ? question.prompt
            : question.prompt}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {question.kind === "tfng" &&
          (["TRUE", "FALSE", "NOT GIVEN"] as Verdict[]).map((option) => (
            <Choice key={option} active={value === option} onClick={() => onChange(option)} label={option} />
          ))}
        {question.kind === "mcq" &&
          question.options.map((option, optionIndex) => (
            <Choice
              key={option}
              active={value === String(optionIndex)}
              onClick={() => onChange(String(optionIndex))}
              label={option}
            />
          ))}
        {question.kind === "heading" &&
          headings?.map((heading, headingIndex) => (
            <Choice
              key={heading}
              active={value === String(headingIndex)}
              onClick={() => onChange(String(headingIndex))}
              label={heading}
            />
          ))}
      </div>
      {checked && state === "bad" && (
        <p className="mt-2 text-sm font-semibold text-bad">
          Верный ответ: {question.kind === "tfng" ? right : question.kind === "mcq" ? question.options[Number(right)] : headings?.[Number(right)]}
        </p>
      )}
    </div>
  );
}

function Choice({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-xl px-3 text-left text-sm ${active ? "bg-teal text-surface" : "bg-bg text-ink"}`}
    >
      {label}
    </button>
  );
}

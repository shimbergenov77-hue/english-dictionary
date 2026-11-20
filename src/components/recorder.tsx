import { Mic, Square, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Recorder({ resetKey, maxSeconds = 180 }: { resetKey: string; maxSeconds?: number }) {
  const [phase, setPhase] = useState<"idle" | "rec" | "done">("idle");
  const [seconds, setSeconds] = useState(0);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const recRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timer = useRef<number | null>(null);
  const urlRef = useRef<string | null>(null);

  useEffect(() => {
    stop();
    setPhase("idle");
    setSeconds(0);
    setError("");
    if (urlRef.current) {
      URL.revokeObjectURL(urlRef.current);
      urlRef.current = null;
    }
    setUrl(null);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
      recRef.current?.stop();
    };
    // reset whenever the prompt changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  function clearTimer() {
    if (timer.current) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  }

  function stop() {
    clearTimer();
    if (recRef.current && recRef.current.state !== "inactive") {
      recRef.current.stop();
    }
  }

  async function start() {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia) {
      setError("Этот браузер не даёт записать звук.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mime = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "";
      const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
      chunks.current = [];
      rec.ondataavailable = (e) => {
        if (e.data.size) chunks.current.push(e.data);
      };
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks.current, { type: rec.mimeType || "audio/webm" });
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        const next = URL.createObjectURL(blob);
        urlRef.current = next;
        setUrl(next);
        setPhase("done");
      };
      recRef.current = rec;
      rec.start();
      setSeconds(0);
      setPhase("rec");
      timer.current = window.setInterval(() => {
        setSeconds((s) => {
          if (s + 1 >= maxSeconds) {
            stop();
            return s + 1;
          }
          return s + 1;
        });
      }, 1000);
    } catch {
      setError("Нет доступа к микрофону. Разреши запись в браузере и попробуй снова.");
    }
  }

  function discard() {
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
    setUrl(null);
    setSeconds(0);
    setPhase("idle");
  }

  const label = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="rounded-2xl border border-line bg-clay-soft p-4">
      <div className="flex flex-wrap items-center gap-3">
        {phase !== "rec" ? (
          <button
            type="button"
            onClick={start}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-clay px-4 font-semibold text-surface"
          >
            <Mic size={18} aria-hidden />
            {phase === "done" ? "Записать ещё раз" : "Записать ответ"}
          </button>
        ) : (
          <button
            type="button"
            onClick={stop}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 font-semibold text-surface"
          >
            <Square size={16} aria-hidden />
            Стоп · {label}
          </button>
        )}
        {phase === "rec" && <span className="text-sm font-semibold text-clay">Идёт запись</span>}
        {phase === "done" && url && (
          <>
            <audio controls src={url} className="h-11 max-w-full" />
            <button
              type="button"
              onClick={discard}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm font-semibold"
            >
              <Trash2 size={16} aria-hidden />
              Удалить
            </button>
          </>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-bad">{error}</p>}
    </div>
  );
}

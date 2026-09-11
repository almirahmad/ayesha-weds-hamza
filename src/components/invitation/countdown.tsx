import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

function split(ms: number) {
  const clamped = Math.max(0, ms);
  const days = Math.floor(clamped / 86_400_000);
  const hours = Math.floor((clamped % 86_400_000) / 3_600_000);
  const minutes = Math.floor((clamped % 3_600_000) / 60_000);
  const seconds = Math.floor((clamped % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

const CELLS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export function Countdown({ target }: { target?: string }) {
  const targetMs = new Date(target ?? EVENT.startsAt).getTime();
  const [remaining, setRemaining] = useState<ReturnType<typeof split> | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(split(targetMs - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetMs]);

  const values = remaining ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="flex flex-wrap justify-center gap-2.5" aria-live="polite">
      {CELLS.map((cell) => (
        <div key={cell.key} className="count-cell">
          <div className="count-num">
            {String(values[cell.key]).padStart(2, "0")}
          </div>
          <div className="count-label">{cell.label}</div>
        </div>
      ))}
    </div>
  );
}

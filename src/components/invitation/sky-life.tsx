import { cn } from "@/lib/utils";

const PETALS = [
  { left: "4%", delay: "0s", duration: "16s", size: 16, drift: "42px", spin: "360deg", tone: "#e7b4b8" },
  { left: "12%", delay: "2.4s", duration: "18s", size: 22, drift: "-36px", spin: "-420deg", tone: "#d08a92" },
  { left: "21%", delay: "6s", duration: "14s", size: 14, drift: "58px", spin: "300deg", tone: "#c46a74" },
  { left: "29%", delay: "1.1s", duration: "20s", size: 18, drift: "-22px", spin: "480deg", tone: "#f0c9cc" },
  { left: "38%", delay: "8.2s", duration: "17s", size: 20, drift: "30px", spin: "-360deg", tone: "#d98b93" },
  { left: "47%", delay: "3.5s", duration: "15s", size: 13, drift: "-48px", spin: "390deg", tone: "#b76e79" },
  { left: "56%", delay: "5.1s", duration: "19s", size: 19, drift: "24px", spin: "-300deg", tone: "#e3a8ae" },
  { left: "64%", delay: "0.8s", duration: "16.5s", size: 15, drift: "-54px", spin: "420deg", tone: "#c97b86" },
  { left: "73%", delay: "7.4s", duration: "18.5s", size: 21, drift: "16px", spin: "-450deg", tone: "#f3d0d3" },
  { left: "81%", delay: "4.2s", duration: "14.5s", size: 17, drift: "-28px", spin: "330deg", tone: "#d08a92" },
  { left: "89%", delay: "9s", duration: "21s", size: 14, drift: "46px", spin: "-390deg", tone: "#c46a74" },
  { left: "8%", delay: "11s", duration: "17s", size: 12, drift: "20px", spin: "270deg", tone: "#e7b4b8" },
  { left: "52%", delay: "12.5s", duration: "15.5s", size: 16, drift: "-40px", spin: "360deg", tone: "#b76e79" },
  { left: "93%", delay: "2s", duration: "19.5s", size: 18, drift: "-18px", spin: "-330deg", tone: "#d98b93" },
] as const;

const BUTTERFLIES = [
  { left: "8%", top: "22%", delay: "0s", duration: "14s", scale: 0.9, hue: "#c4a36a" },
  { left: "78%", top: "18%", delay: "2.2s", duration: "16s", scale: 1.05, hue: "#d4bc8a" },
  { left: "18%", top: "62%", delay: "5s", duration: "18s", scale: 0.8, hue: "#b08d4a" },
  { left: "70%", top: "68%", delay: "7.5s", duration: "15s", scale: 0.95, hue: "#c4a36a" },
  { left: "46%", top: "40%", delay: "3.4s", duration: "20s", scale: 0.75, hue: "#e8d5a3" },
] as const;

function PetalShape({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 20 28" width="100%" height="100%" aria-hidden>
      <path
        d="M10 1.6C14.6 6.2 19 13 10 26.4C1 13 5.4 6.2 10 1.6Z"
        fill={fill}
        opacity="0.92"
      />
      <path
        d="M10 4C12.4 8 13.5 13.5 10 22"
        fill="none"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function ButterflyShape({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 48 40" width="42" height="36" aria-hidden>
      <g className="butterfly-wings">
        <path
          d="M22 20C8 4 4 14 10 22C4 28 10 36 22 22"
          fill={fill}
          opacity="0.9"
        />
        <path
          d="M26 20C40 4 44 14 38 22C44 28 38 36 26 22"
          fill={fill}
          opacity="0.9"
        />
      </g>
      <ellipse cx="24" cy="21" rx="2.1" ry="7.2" fill="#5c2430" />
      <path d="M23 14C21 8 18 7 16 8" fill="none" stroke="#5c2430" strokeWidth="0.8" />
      <path d="M25 14C27 8 30 7 32 8" fill="none" stroke="#5c2430" strokeWidth="0.8" />
    </svg>
  );
}

export function SkyLife({ className }: { className?: string }) {
  return (
    <div className={cn("sky-life", className)} aria-hidden>
      {PETALS.map((petal, i) => (
        <span
          key={`p-${i}`}
          className="petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: Math.round(petal.size * 1.4),
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            ["--drift" as string]: petal.drift,
            ["--spin" as string]: petal.spin,
          }}
        >
          <PetalShape fill={petal.tone} />
        </span>
      ))}
      {BUTTERFLIES.map((fly, i) => (
        <span
          key={`b-${i}`}
          className="butterfly"
          style={{
            left: fly.left,
            top: fly.top,
            animationDelay: fly.delay,
            animationDuration: fly.duration,
            transform: `scale(${fly.scale})`,
          }}
        >
          <ButterflyShape fill={fly.hue} />
        </span>
      ))}
    </div>
  );
}

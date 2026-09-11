import { cn } from "@/lib/utils";

export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 28"
      className={cn("mx-auto h-7 w-52 text-gold-soft", className)}
      aria-hidden
    >
      <path
        d="M8 14H118"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M162 14H272"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M140 5.5L145.5 14L140 22.5L134.5 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="118" cy="14" r="1.4" fill="currentColor" />
      <circle cx="162" cy="14" r="1.4" fill="currentColor" />
    </svg>
  );
}

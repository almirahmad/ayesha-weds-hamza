import type { PointerEvent, MouseEvent, TouchEvent } from "react";
import { EVENT } from "@/lib/event";
import { Flourish } from "./flourish";
import { SkyLife } from "./sky-life";

type EnvelopeProps = {
  onOpen: () => void;
  coverDate?: string;
};

export function Envelope({ onOpen, coverDate }: EnvelopeProps) {
  function openNow(event: PointerEvent | MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();
    onOpen();
  }

  return (
    <div className="envelope-root">
      <img src="/images/envelope.jpg" alt="" className="envelope-photo" />
      <div className="envelope-veil" />
      <SkyLife className="sky-life-cover" />
      <div className="envelope-card">
        <span className="section-label block">You are invited</span>
        <Flourish className="mt-3 mb-4 flourish-cover" />
        <span className="block font-display text-sm tracking-wide text-muted">
          The wedding of
        </span>
        <span className="name-bride mt-2 block">{EVENT.coverBride}</span>
        <span className="block font-script text-3xl leading-none text-gold">&</span>
        <span className="name-groom block">{EVENT.coverGroom}</span>
        <span className="cover-date mt-3 block font-display text-sm text-gold uppercase">
          {coverDate ?? "10 October 2026"}
        </span>
        <span className="wax-seal" aria-hidden>
          <span className="font-script text-3xl leading-none">I&H</span>
        </span>
        <span className="tap-open">Tap to Open</span>
        <span className="mt-2 block font-display text-xs tracking-wide text-muted">
          Tap anywhere
        </span>
      </div>
      <button
        type="button"
        className="envelope-hit"
        aria-label="Open wedding invitation"
        onPointerDown={openNow}
        onTouchStart={openNow}
        onClick={openNow}
      />
    </div>
  );
}

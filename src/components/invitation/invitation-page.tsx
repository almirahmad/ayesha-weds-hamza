import type { ReactNode } from "react";
import {
  CarFront,
  Flower2,
  Heart,
  MapPin,
  Navigation,
  Phone,
  UtensilsCrossed,
} from "lucide-react";
import {
  ALL_NAV,
  CELEBRATIONS,
  EVENT,
  NAV,
  VENUES,
  nextCelebration,
  venueById,
  type InviteVariant,
} from "@/lib/event";
import { Countdown } from "./countdown";
import { Flourish } from "./flourish";
import { StickyNav } from "./sticky-nav";

const ICONS = {
  car: CarFront,
  heart: Heart,
  dinner: UtensilsCrossed,
  flower: Flower2,
} as const;

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 px-5 py-16 sm:px-8 sm:py-20">
      {children}
    </section>
  );
}

export function InvitationPage({ variant = "baraat" }: { variant?: InviteVariant }) {
  const upcoming = variant === "all" ? nextCelebration() : null;
  const countdownLabel = upcoming
    ? `Until ${upcoming.title}`
    : "The celebration begins in";

  return (
    <div className="invite-enter relative min-h-dvh">
      <div className="paper-wash" />
      <div className="relative mx-auto max-w-3xl">
        <StickyNav items={variant === "all" ? ALL_NAV : NAV} />

        <header className="px-5 pt-10 pb-4 text-center sm:pt-12">
          <p className="urdu-block text-3xl text-burgundy sm:text-4xl">دعوت نامہ</p>
          <p className="section-label mt-3">You are invited</p>
          <p className="mt-4 font-script text-3xl text-burgundy sm:text-4xl">
            {EVENT.coverBride} & {EVENT.coverGroom}
          </p>
          <Flourish className="mt-5" />
        </header>

        <Section id="blessings">
          <p className="section-label text-center">Blessings & Prayers</p>
          <Flourish className="mt-4" />
          <div className="arabic-block mx-auto mt-8 max-w-lg text-center text-burgundy">
            <p className="text-2xl sm:text-3xl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p className="mt-6">اللَّهُمَّ اجْعَلْ هَذَا العَقْدَ مَيْمُوْنًا وَمُبَارَكًا</p>
          </div>
          <p className="urdu-block mx-auto mt-5 max-w-md text-center text-ink">
            اے اللہ! اس نکاح کے بندھن کو نہایت بابرکت اور مبارک بنا دے۔
          </p>
          <Flourish className="my-8" />
          <p className="urdu-block mx-auto max-w-xl text-center text-muted">
            سیدنا ابوہریرہ رضی اللہ عنہ سے روایت ہے کہ رسول اللہ صلی اللہ علیہ وسلم جب کسی
            کو اس کی شادی کی مبارک باد دیتے تو فرماتے:
          </p>
          <p className="arabic-block mx-auto mt-5 max-w-lg text-center text-burgundy">
            بَارَکَ اللَّهُ لَکَ وَبَارَکَ عَلَیْکَ وَجَمَعَ بَیْنِکُمَا فِیْ خَیْرٍ
          </p>
          <p className="mt-3 text-center font-display text-xs tracking-wide text-gold">
            سنن ابی داؤد: 2130
          </p>
          <p className="urdu-block mx-auto mt-5 max-w-md text-center text-ink">
            اللہ تمہیں برکت دے، اور تم پر اپنی برکتیں نازل فرمائے، اور تم دونوں کو خیر و
            بھلائی کے ساتھ اکٹھا رکھے۔
          </p>
          <p className="mx-auto mt-5 max-w-md text-center font-display text-base leading-relaxed italic text-muted">
            May Allah bless for you, and may He bless on you, and combine both of you in
            goodness.
          </p>
        </Section>

        <Section id="invitation">
          <p className="section-label text-center">The Invitation</p>
          <Flourish className="mt-4 mb-8" />
          <p className="text-center font-display text-sm tracking-wide text-muted">
            With the blessings of their parents
          </p>
          <p className="mt-3 text-center font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
            {EVENT.parentsOfBride}
          </p>
          <p className="host-script-lead mt-5 text-center">{EVENT.hosts}</p>
          <p className="mx-auto mt-5 max-w-md text-center font-display text-base leading-relaxed text-muted">
            {EVENT.invitationRequest}
          </p>
          <p className="name-bride mt-7 text-center">{EVENT.bride}</p>
          <p className="mt-2 text-center font-display text-sm text-muted">
            Daughter of {EVENT.parentsOfBride}
          </p>
          <p className="mt-5 text-center font-display text-sm tracking-[0.28em] text-gold uppercase">
            to
          </p>
          <p className="name-groom mt-4 text-center">{EVENT.groom}</p>
          <p className="mt-2 text-center font-display text-sm text-muted">
            Son of {EVENT.parentsOfGroom}
          </p>
          <p className="mx-auto mt-8 max-w-md text-center font-display text-base leading-relaxed italic text-muted">
            {EVENT.unionPrayer}
          </p>
          <p className="urdu-block mx-auto mt-4 max-w-md text-center text-ink">
            {EVENT.unionPrayerUrdu}
          </p>
          <Flourish className="mt-10 mb-6" />
          <p className="section-label mb-5 text-center">{countdownLabel}</p>
          <Countdown target={upcoming?.startsAt} />
        </Section>

        {variant === "all" ? <AllEvents /> : <BaraatSchedule />}
        {variant === "all" ? <AllVenues /> : <BaraatVenue />}

        <Section id="family">
          <p className="section-label text-center">Family & Contacts</p>
          <Flourish className="mt-4 mb-10" />

          <article className="family-card">
            <div className="mono-mark">DH</div>
            <p className="font-display text-lg font-semibold text-ink">
              {EVENT.parentsOfBride}
            </p>
            <p className="mt-1 text-xs tracking-[0.18em] text-gold uppercase">
              Parents of the Bride
            </p>
          </article>

          <article className="family-card mt-8">
            <p className="section-label">Bride's Beloved Siblings and Hosts</p>
            <ul className="mt-6 space-y-3">
              {EVENT.compliments.map((name) => (
                <li key={name} className="host-script">
                  {name}
                </li>
              ))}
            </ul>
          </article>

          <article className="family-card mt-6">
            <p className="section-label">Special love</p>
            <p className="kids-script mt-2 inline-flex items-center gap-2">
              {EVENT.specialLove}
              <Heart className="size-4 text-rose" fill="currentColor" strokeWidth={1.5} />
            </p>
            <p className="section-label mt-6">Our Beloved Nano</p>
            <p className="host-script mt-2">{EVENT.belovedNano}</p>
          </article>

          <p className="section-label mt-12 text-center">Contact for guidance</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {EVENT.contacts.map((person) => (
              <a
                key={person.tel}
                href={`tel:${person.tel}`}
                className="family-card flex items-center justify-center gap-3 py-5 transition-[transform] duration-150 ease-out active:scale-[0.96]"
              >
                <span className="phone-mark">
                  <Phone className="size-4" strokeWidth={1.6} />
                </span>
                <span className="text-left">
                  <span className="block font-display text-base font-semibold text-ink">
                    {person.name}
                  </span>
                  <span className="block font-display text-sm tracking-wide text-muted">
                    {person.phone}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Section>

        <section className="px-5 pb-8 sm:px-8">
          <article className="family-card">
            <p className="host-script">Dear Guests!</p>
            <p className="mx-auto mt-4 max-w-md font-display text-base leading-relaxed text-ink">
              It means the world that you are traveling the distance for us.
            </p>
            <p className="mx-auto mt-3 max-w-md font-display text-base leading-relaxed italic text-muted">
              Safe travels on the road, and we'll see you at the finish line!
            </p>
          </article>
        </section>

        <footer className="px-5 pt-4 pb-16 text-center">
          <Flourish />
          <p className="mt-5 font-script text-2xl text-burgundy">
            {EVENT.bride} & {EVENT.groom}
          </p>
          <p className="mt-1 font-display text-xs tracking-[0.28em] text-gold uppercase">
            {variant === "all" ? "08 · 10 · 11 · 2026" : "10 · 10 · 2026"}
          </p>
        </footer>
      </div>
    </div>
  );
}

function BaraatSchedule() {
  return (
    <Section id="schedule">
      <p className="section-label text-center">{EVENT.ceremony}</p>
      <h2 className="mt-3 text-center font-display text-3xl font-medium text-ink">
        {EVENT.dateLabel}
      </h2>
      <Flourish className="mt-4 mb-10" />
      <ol className="timeline-rail mx-auto max-w-md space-y-3">
        {EVENT.schedule.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.title} className="schedule-row">
              <span className="schedule-icon">
                <Icon className="size-3.5" strokeWidth={1.6} />
              </span>
              <div className="time-col font-display text-sm font-semibold tracking-wide text-burgundy">
                {item.time}
              </div>
              <div className="font-display text-base text-ink">{item.title}</div>
            </li>
          );
        })}
      </ol>
      <p className="mx-auto mt-8 max-w-sm text-center font-display text-sm italic text-muted">
        Please be on time to share every moment with us.
      </p>
    </Section>
  );
}

function BaraatVenue() {
  return (
    <Section id="venue">
      <p className="section-label text-center">Venue</p>
      <h2 className="mt-3 text-center font-display text-3xl font-medium text-ink">
        {EVENT.venueName}
      </h2>
      <Flourish className="mt-4 mb-6" />
      <div className="gold-frame overflow-hidden rounded-xl bg-ivory">
        <img
          src="/images/marquee.jpg"
          alt="Evening view of a cream wedding marquee in a garden"
          className="h-52 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 sm:h-64"
        />
        <div className="px-5 py-5 text-center">
          <p className="inline-flex items-center gap-1.5 font-display text-sm tracking-[0.22em] text-gold uppercase">
            <MapPin className="size-3.5" strokeWidth={1.75} />
            Pakpattan
          </p>
          {EVENT.venueLines.map((line) => (
            <p key={line} className="mt-1 font-display text-base leading-relaxed text-ink">
              {line}
            </p>
          ))}
          <a
            href={EVENT.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="tap-open mx-auto mt-5 gap-2 tracking-[0.14em] normal-case"
          >
            <Navigation className="size-3.5" strokeWidth={1.75} />
            Open Maps
          </a>
        </div>
        <iframe
          title="Venue map for Royal Grand Marquee, Pakpattan"
          src={EVENT.mapsEmbed}
          className="map-frame rounded-none"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}

function AllEvents() {
  return (
    <Section id="events">
      <p className="section-label text-center">The Celebrations</p>
      <h2 className="mt-3 text-center font-display text-3xl font-medium text-ink">
        Three blessed gatherings
      </h2>
      <Flourish className="mt-4 mb-10" />
      <div className="space-y-5">
        {CELEBRATIONS.map((event) => {
          const Icon = ICONS[event.icon];
          const venue = venueById(event.venueId);
          return (
            <article key={event.id} className="gold-frame overflow-hidden rounded-xl bg-ivory px-5 py-7">
              <p className="inline-flex w-full items-center justify-center gap-2 section-label">
                <Icon className="size-3.5" strokeWidth={1.7} />
                {event.title}
              </p>
              <h3 className="mt-3 text-center font-display text-2xl font-medium text-ink">
                {event.dateLabel}
              </h3>
              <p className="mt-1 text-center font-display text-sm font-semibold tracking-wide text-burgundy">
                {event.timeLabel}
              </p>
              <p className="mt-3 text-center font-display text-sm text-muted">
                {venue.name}
                <span className="mx-1.5 text-gold">·</span>
                {venue.city}
              </p>
              {event.timeline.length > 0 ? (
                <ol className="timeline-rail mx-auto mt-7 max-w-md space-y-3">
                  {event.timeline.map((item) => {
                    const StepIcon = ICONS[item.icon];
                    return (
                      <li key={item.title} className="schedule-row">
                        <span className="schedule-icon">
                          <StepIcon className="size-3.5" strokeWidth={1.6} />
                        </span>
                        <div className="time-col font-display text-sm font-semibold tracking-wide text-burgundy">
                          {item.time}
                        </div>
                        <div className="font-display text-base text-ink">{item.title}</div>
                      </li>
                    );
                  })}
                </ol>
              ) : null}
              {event.note ? (
                <p className="mx-auto mt-6 max-w-sm text-center font-display text-sm italic leading-relaxed text-muted">
                  {event.note}
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function AllVenues() {
  return (
    <Section id="venues">
      <p className="section-label text-center">Venues</p>
      <h2 className="mt-3 text-center font-display text-3xl font-medium text-ink">
        Two houses of celebration
      </h2>
      <Flourish className="mt-4 mb-10" />
      <div className="space-y-8">
        {VENUES.map((venue) => (
          <div key={venue.id} className="gold-frame overflow-hidden rounded-xl bg-ivory">
            <img
              src={venue.image}
              alt={venue.imageAlt}
              className="h-52 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 sm:h-64"
            />
            <div className="px-5 py-5 text-center">
              <p className="inline-flex items-center gap-1.5 font-display text-sm tracking-[0.22em] text-gold uppercase">
                <MapPin className="size-3.5" strokeWidth={1.75} />
                {venue.city}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-ink">{venue.name}</h3>
              <p className="mt-1 font-display text-xs tracking-[0.2em] text-gold uppercase">
                {venue.events}
              </p>
              {venue.lines.map((line) => (
                <p key={line} className="mt-1 font-display text-base leading-relaxed text-ink">
                  {line}
                </p>
              ))}
              <a
                href={venue.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="tap-open mx-auto mt-5 gap-2 tracking-[0.14em] normal-case"
              >
                <Navigation className="size-3.5" strokeWidth={1.75} />
                Open Maps
              </a>
            </div>
            <iframe
              title={`Venue map for ${venue.name}`}
              src={venue.mapsEmbed}
              className="map-frame rounded-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

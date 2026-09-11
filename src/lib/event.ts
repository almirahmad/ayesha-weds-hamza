export type InviteVariant = "baraat" | "all";

export const EVENT = {
  bride: "Itba Ayesha",
  groom: "Rana Hamza Iftikhar",
  coverBride: "Ayesha",
  coverGroom: "Hamza",
  startsAt: "2026-10-10T19:00:00+05:00",
  dateLabel: "Saturday, 10th October 2026",
  ceremony: "The Baraat Ceremony",
  venueName: "Royal Grand Marquee",
  venueLines: [
    "Near Fruit & Vegetable Market, Depalpur Road",
    "Pākpattan, 57400",
  ],
  mapsQuery: "Royal Grand Marquee Near Fruit and Vegetable Market Depalpur Road Pakpattan 57400",
  mapsEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=73.360%2C30.325%2C73.420%2C30.360&layer=mapnik&marker=30.343%2C73.389",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Royal+Grand+Marquee+Near+Fruit+and+Vegetable+Market+Depalpur+Road+Pakpattan+57400",
  parentsOfBride: "Mr. & Mrs. Haji Dabeer Hussain",
  parentsOfGroom: "Mr. & Mrs. Rana Iftikhar",
  hosts: "Ahmad and Meerat",
  invitationRequest:
    "request the honour of your presence at the wedding celebration of their beloved sister",
  unionPrayer:
    "May Allah bless this union, place love and mercy between their hearts, and make their home a source of peace, faith, and happiness.",
  unionPrayerUrdu:
    "اللہ تعالیٰ اس بندھن میں برکت عطا فرمائے، ان کے دلوں میں محبت اور رحمت پیدا کرے، اور ان کے گھر کو سکون، ایمان اور خوشیوں کا گہوارہ بنائے۔",
  schedule: [
    { time: "07:00 PM", title: "Arrival of Baraat", icon: "car" as const },
    { time: "07:30 PM", title: "Nikkah Ceremony", icon: "heart" as const },
    { time: "08:00 PM", title: "Dinner Served", icon: "dinner" as const },
    { time: "09:30 PM", title: "Rukhsati", icon: "flower" as const },
  ],
  compliments: [
    "Mr. & Mrs. Rana Ahmad",
    "Mr. & Mrs. Kashif Majeed",
    "Mr. & Mrs. Safdar Hussain",
    "Mr. & Mrs. Sheikh Zeeshan",
  ],
  specialLove: "Almir, Minha, Muhammad, Mahad, Rohan & Hanaa",
  specialLoveLabel: "Our little peeps",
  belovedNano: "محترمہ خورشید بانو",
  belovedNanoUrdu: "",
  contacts: [
    { name: "Haji Makhan", phone: "0306-1614928", tel: "+923061614928" },
    { name: "Rana Ahmad", phone: "0304-2463055", tel: "+923042463055" },
  ],
  guestNoteTitle: "Dear Guests",
  guestNote:
    "It means the world that you are traveling the distance for us. Safe travels on the road, and we'll see you at the finish line!",
  waleema: {
    title: "The Waleema",
    marriageOf: "Marriage of",
    honor:
      "The honor of your presence is requested at a reception celebrating the",
    note: "Please join us for an evening of elegance and celebration.",
    dateFormal: "Sunday, the 11th of October, 2026",
    dinner: "Dinner at 8 o’clock in the evening",
    dateLabel: "Sunday, 11th October 2026",
    timeLabel: "08:00 PM",
    startsAt: "2026-10-11T20:00:00+05:00",
    venueName: "Central Palace Marquees & FarmHouse",
    venueCity: "Lahore",
    venueLines: ["Lahore-Kasur Road", "Central Park Housing Scheme, Lahore"],
    mapsLink: "https://maps.app.goo.gl/Q69QW95YG1LmUhpEA?g_st=ic",
    mapsEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=74.220%2C31.360%2C74.280%2C31.410&layer=mapnik&marker=31.385%2C74.250",
  },
} as const;

export type ScheduleIcon = "car" | "heart" | "dinner" | "flower";

export const VENUES = [
  {
    id: "lahore",
    name: EVENT.waleema.venueName,
    city: "Lahore",
    lines: EVENT.waleema.venueLines,
    mapsLink: EVENT.waleema.mapsLink,
    mapsEmbed: EVENT.waleema.mapsEmbed,
    image: "/images/farmhouse.jpg",
    imageAlt: "Garden farmhouse marquee at golden hour",
    events: "Mehndi & Waleema",
  },
  {
    id: "pakpattan",
    name: "Royal Grand Marquee",
    city: "Pakpattan",
    lines: [
      "Near Fruit & Vegetable Market, Depalpur Road",
      "Pākpattan, 57400",
    ],
    mapsLink: EVENT.mapsLink,
    mapsEmbed: EVENT.mapsEmbed,
    image: "",
    imageAlt: "",
    events: "Baraat Ceremony",
  },
] as const;

export const CELEBRATIONS = [
  {
    id: "mehndi",
    title: "The Mehndi",
    dateLabel: "Thursday, 8th October 2026",
    timeLabel: "06:00 PM onwards",
    startsAt: "2026-10-08T18:00:00+05:00",
    venueId: "lahore" as const,
    icon: "flower" as const,
    note: "Come hungry — Gol Gappay, Chole Bhature, and the famous BBQ. A Mehndi without good food? Absolutely not.",
    timeline: [] as { time: string; title: string; icon: ScheduleIcon }[],
  },
  {
    id: "baraat",
    title: "The Baraat Ceremony",
    dateLabel: EVENT.dateLabel,
    timeLabel: "07:00 PM",
    startsAt: EVENT.startsAt,
    venueId: "pakpattan" as const,
    icon: "car" as const,
    note: "Please be on time to share every moment with us.",
    timeline: [...EVENT.schedule],
  },
  {
    id: "walema",
    title: EVENT.waleema.title,
    dateLabel: EVENT.waleema.dateLabel,
    timeLabel: EVENT.waleema.timeLabel,
    startsAt: EVENT.waleema.startsAt,
    venueId: "lahore" as const,
    icon: "dinner" as const,
    note: EVENT.waleema.note,
    timeline: [] as { time: string; title: string; icon: ScheduleIcon }[],
  },
] as const;

export const NAV = [
  { id: "blessings", label: "Blessings" },
  { id: "invitation", label: "Invitation" },
  { id: "schedule", label: "Schedule" },
  { id: "venue", label: "Venue" },
  { id: "waleema", label: "Waleema" },
  { id: "family", label: "Family" },
] as const;

export const ALL_NAV = [
  { id: "blessings", label: "Blessings" },
  { id: "invitation", label: "Invitation" },
  { id: "events", label: "Events" },
  { id: "venues", label: "Venues" },
  { id: "family", label: "Family" },
] as const;

export function venueById(id: (typeof VENUES)[number]["id"]) {
  return VENUES.find((venue) => venue.id === id) ?? VENUES[1];
}

export function nextCelebration(now = Date.now()) {
  return (
    CELEBRATIONS.find((event) => new Date(event.startsAt).getTime() > now) ??
    CELEBRATIONS[CELEBRATIONS.length - 1]
  );
}

export type CwlEvent = {
  title: string;
  /** ISO date-time string (NZ timezone offset recommended) */
  date: string;
  location: string;
};

// Add or edit upcoming events here. They flow through to the calendar.
export const EVENTS: CwlEvent[] = [
  {
    title: "National Conference 2026",
    date: "2026-09-19T10:00:00+12:00",
    location: "Wellington",
  },
  {
    title: "Diocesan Retreat Day",
    date: "2026-07-26T09:30:00+12:00",
    location: "Auckland",
  },
  {
    title: "WUCWO Prayer Gathering",
    date: "2026-08-15T18:00:00+12:00",
    location: "Online",
  },
];

/** YYYY-MM-DD key in local time, used to match events to calendar days. */
export function dateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

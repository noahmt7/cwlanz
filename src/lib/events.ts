export type CwlEvent = {
  title: string;
  /** ISO date-time string (NZ timezone offset recommended) */
  date: string;
  /** ISO date-time string for the final day of a multi-day event (optional) */
  endDate?: string;
  location: string;
};

// Add or edit upcoming events here. They flow through to the calendar.
export const EVENTS: CwlEvent[] = [
  {
    title: "Australian State Conference",
    date: "2026-09-01T09:00:00+12:00",
    endDate: "2026-09-03T09:00:00+12:00",
    location: "Brisbane",
  },
  {
    title: "NZ National Conference",
    date: "2027-07-13T09:00:00+12:00",
    endDate: "2027-07-14T09:00:00+12:00",
    location: "Christchurch",
  },
];

/** YYYY-MM-DD key in local time, used to match events to calendar days. */
export function dateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

import Link from "next/link";
import styles from "./NextEvent.module.css";

type EventInfo = {
  title: string;
  date: Date;
  location: string;
  description: string;
  href: string;
};

// Update these details as events are scheduled.
const NEXT_EVENT: EventInfo = {
  title: "CWLANZ National Conference",
  date: new Date("2027-07-13T17:00:00+12:00"),
  location: "The Elms Hotel, Christchurch",
  description:
    "Join members for three days of fellowship, prayer, and shared purpose, 13–15 July, opening with the Mini Whakatau and Conference Mass at the Pro Cathedral.",
  href: "/calendar",
};

const TIME_ZONE = "Pacific/Auckland";
const DAY = new Intl.DateTimeFormat("en-NZ", {
  day: "numeric",
  timeZone: TIME_ZONE,
});
const MONTH = new Intl.DateTimeFormat("en-NZ", {
  month: "short",
  timeZone: TIME_ZONE,
});
const FULL = new Intl.DateTimeFormat("en-NZ", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: TIME_ZONE,
});
const TIME = new Intl.DateTimeFormat("en-NZ", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: TIME_ZONE,
});

export default function NextEvent() {
  const { title, date, location, description, href } = NEXT_EVENT;

  return (
    <section className={styles.section} aria-labelledby="next-event-heading">
      <div className={styles.inner}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Next Event</p>
          <Link href="/calendar" className={styles.calendarLink}>
            View full calendar <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className={styles.card}>
          <div className={styles.dateBadge} aria-hidden>
            <span className={styles.day}>{DAY.format(date)}</span>
            <span className={styles.month}>{MONTH.format(date)}</span>
          </div>

          <div className={styles.details}>
            <h2 id="next-event-heading" className={styles.title}>
              {title}
            </h2>
            <p className={styles.meta}>
              <time dateTime={date.toISOString()}>{FULL.format(date)}</time>
              <span className={styles.dot} aria-hidden>
                &middot;
              </span>
              {TIME.format(date)}
              <span className={styles.dot} aria-hidden>
                &middot;
              </span>
              {location}
            </p>
            <p className={styles.description}>{description}</p>
          </div>

          <Link href={href} className="btn btnNavy">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}

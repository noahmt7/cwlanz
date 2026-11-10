"use client";

import { useMemo, useState } from "react";
import { EVENTS, dateKey, type CwlEvent } from "@/lib/events";
import styles from "./Calendar.module.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_YEAR = new Intl.DateTimeFormat("en-NZ", {
  month: "long",
  year: "numeric",
});

type Cell = { date: Date; inMonth: boolean };

function buildGrid(year: number, month: number): Cell[] {
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(1 - first.getDay()); // back up to the Sunday on/before the 1st

  return Array.from({ length: 42 }, (_, i) => {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    return { date, inMonth: date.getMonth() === month };
  });
}

export default function Calendar() {
  const today = useMemo(() => new Date(), []);
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  // Group events by day key for quick lookup.
  const eventsByDay = useMemo(() => {
    const map = new Map<string, CwlEvent[]>();
    for (const ev of EVENTS) {
      const start = new Date(ev.date);
      const end = ev.endDate ? new Date(ev.endDate) : start;
      const cursor = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      const last = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      while (cursor <= last) {
        const key = dateKey(cursor);
        const list = map.get(key) ?? [];
        list.push(ev);
        map.set(key, list);
        cursor.setDate(cursor.getDate() + 1);
      }
    }
    return map;
  }, []);

  const cells = useMemo(
    () => buildGrid(view.year, view.month),
    [view.year, view.month]
  );

  const monthEvents = useMemo(
    () =>
      EVENTS.map((ev) => ({ ev, d: new Date(ev.date) }))
        .filter(({ d }) => d.getFullYear() === view.year && d.getMonth() === view.month)
        .sort((a, b) => a.d.getTime() - b.d.getTime()),
    [view.year, view.month]
  );

  const shiftMonth = (delta: number) => {
    setView(({ year, month }) => {
      const d = new Date(year, month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const goToday = () =>
    setView({ year: today.getFullYear(), month: today.getMonth() });

  const todayKey = dateKey(today);
  const label = MONTH_YEAR.format(new Date(view.year, view.month, 1));

  return (
    <div className={styles.wrap}>
      <div className={styles.calendar}>
        <div className={styles.toolbar}>
          <h2 className={styles.monthLabel}>{label}</h2>
          <div className={styles.controls}>
            <button className={styles.todayBtn} onClick={goToday}>
              Today
            </button>
            <button
              className={styles.navBtn}
              onClick={() => shiftMonth(-1)}
              aria-label="Previous month"
            >
              &#8249;
            </button>
            <button
              className={styles.navBtn}
              onClick={() => shiftMonth(1)}
              aria-label="Next month"
            >
              &#8250;
            </button>
          </div>
        </div>

        <div className={styles.weekdays}>
          {WEEKDAYS.map((d) => (
            <div key={d} className={styles.weekday}>
              {d}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {cells.map(({ date, inMonth }) => {
            const key = dateKey(date);
            const dayEvents = eventsByDay.get(key) ?? [];
            const isToday = key === todayKey;
            return (
              <div
                key={key}
                className={[
                  styles.cell,
                  inMonth ? "" : styles.outside,
                  isToday ? styles.today : "",
                ].join(" ")}
              >
                <span className={styles.dayNum}>{date.getDate()}</span>
                {dayEvents.length > 0 && (
                  <span className={styles.events}>
                    {dayEvents.map((ev, i) => (
                      <span key={i} className={styles.eventPill} title={ev.title}>
                        {ev.title}
                      </span>
                    ))}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <aside className={styles.agenda}>
        <h3 className={styles.agendaHeading}>Events this month</h3>
        {monthEvents.length === 0 ? (
          <p className={styles.agendaEmpty}>No events scheduled.</p>
        ) : (
          <ul className={styles.agendaList}>
            {monthEvents.map(({ ev, d }, i) => (
              <li key={i} className={styles.agendaItem}>
                <span className={styles.agendaDate}>
                  {d.toLocaleDateString("en-NZ", { day: "numeric", month: "short" })}
                  {ev.endDate &&
                    ` – ${new Date(ev.endDate).toLocaleDateString("en-NZ", {
                      day: "numeric",
                      month: "short",
                    })}`}
                </span>
                <span className={styles.agendaBody}>
                  <span className={styles.agendaTitle}>{ev.title}</span>
                  <span className={styles.agendaMeta}>{ev.location}</span>
                  {ev.details && (
                    <ul className={styles.agendaDetails}>
                      {ev.details.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

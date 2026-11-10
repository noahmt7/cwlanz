import PageShell from "@/components/PageShell";
import styles from "./newsletters.module.css";

// Newest first. Files live in /public, so `file` is the exact filename there.
const NEWSLETTERS = [
  { title: "September 2026", file: "Newsletter September 2026.pdf" },
  { title: "July 2026", file: "July Newsletter 2026.pdf" },
];

export default function Page() {
  return (
    <PageShell eyebrow="Inform" title="Latest Newsletters">
      <p className={styles.intro}>
        Catch up on the latest news from the League. Download any issue below
        to read or print.
      </p>

      <ul className={styles.list}>
        {NEWSLETTERS.map(({ title, file }) => (
          <li key={file} className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <a
              className={styles.download}
              href={`/${encodeURIComponent(file)}`}
              download={file}
              aria-label={`Download the ${title} newsletter (PDF)`}
            >
              Download (PDF)
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

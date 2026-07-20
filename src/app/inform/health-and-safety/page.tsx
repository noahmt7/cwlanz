import PageShell from "@/components/PageShell";
import styles from "./health-and-safety.module.css";

const POSTER_PDF = "/NOPS-contact-poster-8.21.pdf";
const POSTER_SOURCE =
  "https://safeguarding.catholic.org.nz/wp-content/uploads/2021/08/NOPS-contact-poster-8.21.pdf";
const SAFEGUARDING_SITE = "https://safeguarding.catholic.org.nz/";

export default function Page() {
  return (
    <PageShell eyebrow="Inform" title="Health and Safety">
      <p className={styles.intro}>
        The safety and wellbeing of our members is a responsibility we all
        share. If you have a concern about the conduct of anyone in the Church,
        the National Office for Professional Standards (NOPS) is there to
        listen.
      </p>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>NOPS Contact Poster</h2>
        <p className={styles.cardText}>
          Print this poster and display it where members meet.
        </p>

        <a
          className={styles.download}
          href={POSTER_PDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the poster (PDF)
        </a>

        <ul className={styles.contacts}>
          <li>
            <p className={styles.label}>Phone</p>
            <a className={styles.value} href="tel:0800114622">
              0800 114 622
            </a>
          </li>
          <li>
            <p className={styles.label}>Email</p>
            <a className={styles.value} href="mailto:prof.standards@nzcbc.org.nz">
              prof.standards@nzcbc.org.nz
            </a>
          </li>
        </ul>

        <p className={styles.source}>
          Source:{" "}
          <a href={POSTER_SOURCE} target="_blank" rel="noopener noreferrer">
            safeguarding.catholic.org.nz
          </a>{" "}
          — see the{" "}
          <a href={SAFEGUARDING_SITE} target="_blank" rel="noopener noreferrer">
            Safeguarding website
          </a>{" "}
          for the full set of resources.
        </p>
      </div>
    </PageShell>
  );
}

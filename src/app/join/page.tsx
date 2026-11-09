import Link from "next/link";
import PageShell from "@/components/PageShell";
import styles from "./join.module.css";

type Opportunity = {
  lead: string;
  body: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    lead: "To be involved",
    body: "at parish, local, community, regional and national levels.",
  },
  {
    lead: "To share",
    body: "the wisdom of our life experiences and skills.",
  },
  {
    lead: "To enhance",
    body: "personal development.",
  },
  {
    lead: "To interact",
    body: "with like-minded women in influencing the future in the church and society.",
  },
  {
    lead: "To enjoy",
    body: "friendship, prayer and spirituality.",
  },
];

const OPTIONS = ["Full Member", "Associate Member", "Lone Leaguer", "Friend of CWL"];

const BADGE_YEARS = ["10", "25", "40", "50", "60"];

export default function Page() {
  return (
    <PageShell eyebrow="Membership" title="Join" wide>
      <p className={styles.intro}>
        Membership offers the opportunity to be part of a community of women
        united in faith and service across Aotearoa New Zealand.
      </p>

      <div className={styles.layout}>
        <section className={styles.main} aria-labelledby="opportunities-heading">
          <h2 id="opportunities-heading" className={styles.sectionHeading}>
            Membership offers the opportunity
          </h2>
          <ul className={styles.opportunities}>
            {OPPORTUNITIES.map(({ lead, body }) => (
              <li key={lead} className={styles.opportunity}>
                <span className={styles.oppLead}>{lead}</span>
                <span className={styles.oppBody}>{body}</span>
              </li>
            ))}
          </ul>
        </section>

        <aside className={styles.aside}>
          <div className={styles.card} aria-labelledby="options-heading">
            <h2 id="options-heading" className={styles.cardHeading}>
              Membership options
            </h2>
            <ul className={styles.options}>
              {OPTIONS.map((opt) => (
                <li key={opt} className={styles.option}>
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.card} aria-labelledby="badges-heading">
            <h2 id="badges-heading" className={styles.cardHeading}>
              Service badges
            </h2>
            <p className={styles.badgesText}>
              Awarded in recognition of years of service at:
            </p>
            <ul className={styles.badges}>
              {BADGE_YEARS.map((year) => (
                <li key={year} className={styles.badge}>
                  {year} <span className={styles.badgeUnit}>years</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="btn btnGold">
            Enquire about joining
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}

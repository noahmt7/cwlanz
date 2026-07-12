import Link from "next/link";
import styles from "./JoinCta.module.css";

export default function JoinCta() {
  return (
    <section className={styles.section} aria-labelledby="join-cta-heading">
      <div className={styles.band}>
        <h2 id="join-cta-heading" className={styles.heading}>
          Walk with us in faith and service
        </h2>
        <p className={styles.text}>
          Branches across Aotearoa New Zealand would love to welcome you. Come
          for the friendship — stay for the mission.
        </p>
        <div className={styles.actions}>
          <Link href="/join" className="btn btnGold">
            Join CWL
          </Link>
          <Link
            href="/inspire/why-become-a-member"
            className="btn btnGhostLight"
          >
            Why become a member
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Slideshow from "./Slideshow";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Nau mai, haere mai — welcome</p>
        <h1 className={styles.heading}>
          Faith <em className={styles.amp}>&amp;</em> Service
        </h1>
        <p className={styles.lede}>
          Bringing women together in faith, friendship and service — in
          parishes and communities across Aotearoa New Zealand.
        </p>
        <div className={styles.actions}>
          <Link href="/join" className="btn btnGold">
            Become a Member
          </Link>
          <Link href="/calendar" className="btn btnGhost">
            What&rsquo;s On
          </Link>
        </div>
      </div>

      <div className={styles.media}>
        <Slideshow />
      </div>
    </section>
  );
}

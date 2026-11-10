import Image from "next/image";
import PageShell from "@/components/PageShell";
import styles from "./annual-theme.module.css";

export default function Page() {
  return (
    <PageShell eyebrow="Quick Links" title="Annual Theme" wide>
      <section className={styles.feature}>
        <div className={styles.theme}>
          <h2 className={styles.english}>Women of Hope</h2>
          <span className={styles.ornament} aria-hidden="true" />
          <p className={styles.maori} lang="mi">
            Wāhine o Tūmanako
          </p>
        </div>
        <Image
          src="/images/annual-theme/pope-francis-quote.jpg"
          alt="“We are called to become men and women of hope.” Pope Francis — white text over hands holding a lit sparkler"
          width={1784}
          height={831}
          sizes="(max-width: 1040px) 100vw, 960px"
          className={styles.quote}
        />
      </section>
    </PageShell>
  );
}

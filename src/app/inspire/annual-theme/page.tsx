import PageShell from "@/components/PageShell";
import styles from "./annual-theme.module.css";

export default function Page() {
  return (
    <PageShell eyebrow="Quick Links" title="Annual Theme">
      <div className={styles.theme}>
        <p className={styles.english}>Women of Hope</p>
        <p className={styles.maori} lang="mi">
          Wāhine o Tūmanako
        </p>
      </div>
    </PageShell>
  );
}

import styles from "./DevBanner.module.css";

export default function DevBanner() {
  return (
    <div className={styles.banner} role="alert">
      <span className={styles.dot} aria-hidden />
      <p className={styles.text}>
        <strong>Site under development.</strong> This is a work-in-progress
        preview &mdash; some events, dates and details are placeholders and are{" "}
        <strong>not real</strong>. Please don&rsquo;t rely on anything here yet.
      </p>
    </div>
  );
}

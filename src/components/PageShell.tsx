import styles from "./PageShell.module.css";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  /** Let content span the full page width (e.g. grids, calendars). */
  wide?: boolean;
  children?: React.ReactNode;
};

export default function PageShell({ title, eyebrow, wide, children }: PageShellProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
      </header>
      <div className={`${styles.body} ${wide ? styles.wide : ""}`}>
        {children ?? (
          <p className={styles.placeholder}>
            Content for this page is coming soon.
          </p>
        )}
      </div>
    </div>
  );
}

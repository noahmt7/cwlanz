import styles from "./PageShell.module.css";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

export default function PageShell({ title, eyebrow, children }: PageShellProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
      </header>
      <div className={styles.body}>
        {children ?? (
          <p className={styles.placeholder}>
            Content for this page is coming soon.
          </p>
        )}
      </div>
    </div>
  );
}

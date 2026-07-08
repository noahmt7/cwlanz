import PageShell from "@/components/PageShell";
import FacebookIcon from "@/components/FacebookIcon";
import styles from "./contact.module.css";

const FACEBOOK_URL = "https://www.facebook.com/groups/424755138334794";

export default function Page() {
  return (
    <PageShell title="Contact Us">
      <p className={styles.intro}>
        We&rsquo;d love to hear from you. For enquiries, please get in touch with
        the National President.
      </p>

      <div className={styles.fields}>
        <div className={`${styles.field} ${styles.emailField}`}>
          <p className={styles.label}>Email</p>
          <a className={styles.email} href="mailto:cwlnat.president@gmail.com">
            cwlnat.president@gmail.com
          </a>
        </div>

        <div className={styles.field}>
          <p className={styles.label}>Facebook</p>
          <a
            className={styles.facebook}
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon size={22} />
            <span>Find us on Facebook</span>
          </a>
        </div>
      </div>
    </PageShell>
  );
}

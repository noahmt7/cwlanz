import styles from "./Footer.module.css";
import FacebookIcon from "./FacebookIcon";

const FACEBOOK_URL = "https://www.facebook.com/groups/424755138334794";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a
          className={styles.social}
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Facebook group (opens in a new tab)"
        >
          <FacebookIcon size={18} />
          <span>Find us on Facebook</span>
        </a>

        <p className={styles.notice}>
          ⚠️ This website is currently under development. Some content, events
          and dates shown are placeholders and are not real.
        </p>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Catholic Women&rsquo;s League
          Aotearoa New Zealand
        </p>
      </div>
    </footer>
  );
}

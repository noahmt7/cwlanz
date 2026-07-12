import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import FacebookIcon from "./FacebookIcon";

const FACEBOOK_URL = "https://www.facebook.com/groups/424755138334794";
const EMAIL = "cwlnat.president@gmail.com";

const EXPLORE_LINKS = [
  { label: "Welcome", href: "/welcome" },
  { label: "Calendar", href: "/calendar" },
  { label: "Events", href: "/inform/events" },
  { label: "Meet our Board", href: "/about/meet-our-board" },
  { label: "Become a Member", href: "/join" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <Image
              src="/images/logo.png"
              alt=""
              width={52}
              height={52}
              className={styles.logo}
            />
            <p className={styles.brandName}>
              Catholic Women&rsquo;s League
              <span className={styles.brandSub}>Aotearoa New Zealand</span>
            </p>
          </div>
          <p className={styles.motto}>
            Faith <em>&amp;</em> Service
          </p>
        </div>

        <nav className={styles.col} aria-label="Footer">
          <p className={styles.colHeading}>Explore</p>
          <ul className={styles.linkList}>
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.colHeading}>Connect</p>
          <a
            className={styles.social}
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our Facebook group (opens in a new tab)"
          >
            <FacebookIcon size={17} />
            <span>Find us on Facebook</span>
          </a>
          <a className={styles.email} href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Catholic Women&rsquo;s League
            Aotearoa New Zealand
          </p>
          <p className={styles.notice}>
            This website is under development — some content and dates are
            placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}

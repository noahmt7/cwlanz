import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Welcome", href: "/welcome" },
      { label: "Calendar", href: "/calendar" },
    ],
  },
  {
    label: "Inspire",
    href: "/inspire",
    children: [
      { label: "Members Stories", href: "/inspire/members-stories" },
      { label: "Why Become a Member", href: "/inspire/why-become-a-member" },
      { label: "Resources", href: "/inspire/resources" },
    ],
  },
  {
    label: "Inform",
    href: "/inform",
    children: [
      { label: "Spotlight", href: "/inform/spotlight" },
      { label: "Events", href: "/inform/events" },
      { label: "WUCWO", href: "/inform/wucwo" },
      { label: "Diocesan Conferences 26", href: "/inform/diocesan-conferences-26" },
      { label: "Communiques", href: "/inform/communiques" },
      { label: "Health and Safety", href: "/inform/health-and-safety" },
      { label: "Structure", href: "/inform/structure" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History", href: "/about/history" },
      { label: "Annual Report", href: "/about/annual-report" },
      { label: "Meet our Board", href: "/about/meet-our-board" },
    ],
  },
  {
    label: "Missions",
    href: "/missions",
    children: [
      { label: "Communities", href: "/missions/communities" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.brandRow}>
        <Link href="/" className={styles.brand} aria-label="CWL home">
          <Image
            src="/images/logo.png"
            alt="Catholic Women's League emblem"
            width={72}
            height={72}
            className={styles.logo}
            priority
          />
          <span className={styles.title}>
            Catholic Women&rsquo;s League
            <span className={styles.subtitle}>Aotearoa New Zealand</span>
          </span>
        </Link>
      </div>

      <nav className={styles.nav} aria-label="Primary">
        <ul className={styles.navList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className={styles.navItem}>
              <Link href={item.href} className={styles.navLink}>
                {item.label}
                {item.children && <span className={styles.caret} aria-hidden />}
              </Link>

              {item.children && (
                <ul className={styles.dropdown}>
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link href={child.href} className={styles.dropdownLink}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

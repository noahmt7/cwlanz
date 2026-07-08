import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Inspire",
    href: "/inspire",
    children: [
      { label: "Prayer & Reflection", href: "/inspire/prayer" },
      { label: "Faith Stories", href: "/inspire/stories" },
    ],
  },
  {
    label: "Inform",
    href: "/inform",
    children: [
      { label: "News", href: "/inform/news" },
      { label: "Newsletters", href: "/inform/newsletters" },
      { label: "Events", href: "/inform/events" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Our History", href: "/about/history" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Missions",
    href: "/missions",
    children: [
      { label: "Our Work", href: "/missions/our-work" },
      { label: "Get Involved", href: "/missions/get-involved" },
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

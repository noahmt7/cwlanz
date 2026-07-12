import styles from "./Pillars.module.css";

type Pillar = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const PILLARS: Pillar[] = [
  {
    title: "Faith",
    text: "Rooted in prayer, the sacraments and the life of the Church.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3v18M6.5 9h11" />
      </svg>
    ),
  },
  {
    title: "Service",
    text: "Practical care for parishes, missions and communities in need.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Friendship",
    text: "A nationwide sisterhood where every woman is welcome.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section className={styles.section} aria-labelledby="pillars-heading">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Our Mission</p>
        <h2 id="pillars-heading" className={styles.heading}>
          What brings us together
        </h2>

        <div className={styles.grid}>
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className={styles.card}>
              <span className={styles.icon}>{pillar.icon}</span>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardText}>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

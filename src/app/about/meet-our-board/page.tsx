import Image from "next/image";
import PageShell from "@/components/PageShell";
import styles from "./board.module.css";

type Member = {
  name: string;
  role: string;
  image: string;
};

type Section = {
  heading: string;
  members: Member[];
};

const SECTIONS: Section[] = [
  {
    heading: "National Officers",
    members: [
      { name: "Sylvia", role: "National President", image: "/images/board/sylvia.png" },
      { name: "Mary", role: "National Secretary", image: "/images/board/mary.png" },
      { name: "Roz", role: "National Treasurer", image: "/images/board/roz.png" },
      { name: "Colleen", role: "National Assistant Treasurer", image: "/images/board/colleen.png" },
    ],
  },
  {
    heading: "Diocesan Presidents",
    members: [
      { name: "Fleur", role: "Auckland", image: "/images/board/fleur.png" },
      { name: "Janette", role: "Hamilton", image: "/images/board/kris.png" },
      { name: "Kris", role: "Wellington", image: "/images/board/janette.png" },
      { name: "Lynn", role: "Christchurch", image: "/images/board/lynn.png" },
    ],
  },
  {
    heading: "National Board",
    members: [
      { name: "Christine", role: "Chaplain", image: "/images/board/christine.png" },
      { name: "Bonnie", role: "National Social Issues Convenor", image: "/images/board/bonnie.png" },
      { name: "Lorraine", role: "National Missions Secretary", image: "/images/board/lorraine.png" },
      { name: "Liz", role: "International WUCWO Secretary", image: "/images/board/liz.png" },
      { name: "Dr Colleen McMurchy", role: "Tikanga Māori Adviser", image: "/images/board/colleen-mcmurchy.png" },
    ],
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="About" title="Meet our Board" wide>
      <div className={styles.sections}>
        {SECTIONS.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.sectionHeading}>{section.heading}</h2>
            <ul className={styles.grid}>
              {section.members.map((member) => (
                <li key={member.name} className={styles.card}>
                  <div className={styles.photoWrap}>
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 600px) 45vw, 220px"
                      className={styles.photo}
                    />
                  </div>
                  <p className={styles.name}>{member.name}</p>
                  <p className={styles.role}>{member.role}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

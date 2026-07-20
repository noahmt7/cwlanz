import PageShell from "@/components/PageShell";
import styles from "./why-become-a-member.module.css";

const STORY: string[] = [
  "I was introduced to the League in Bryndwr about 30 years ago. We had been in New Zealand only a short time, emigrating from Ireland. I was also a new convert to the Catholic faith. I had been brought up in England as a Baptist. I always held a firm belief in God and felt Jesus’ love for me and know He has guided me through various difficulties.",
  "My husband is an Irish Catholic and we agreed that our children would be baptised into his faith. When our son was born, and as a family we went to Mass, I came to the realization that I would have to “get off the fence” and make a firm decision to commit one way or the other. I’m sure that the many Novena’s his Aunt Sal prayed for me helped steer me.",
  "My faith journey then started when we came to New Zealand, firstly in Auckland and then in Christchurch, and through a very welcoming couple who befriended us, I joined the League, and found welcome and fellowship, and wonderful examples of faithful women truly living the League motto of Faith and Service.",
  "I have learnt so much from these women who have been grounded in the Faith from childhood and who are confident and active members in their Parishes, who see communities in need and respond, and do not hesitate to defend their Faith in todays world, in these changing times.",
  "I served as Secretary and Treasurer for many years at Bryndwr and twice as Regional Rep for Region 2. I am currently the WUCWO representative for the Diocese and this has expanded my understanding of Catholic women worldwide working towards a common goal of serving Christ by serving His people, without discrimination and judgment. I decided to transfer to Sockburn branch of the League at the time of the amalgamation of the Parishes, as St Theresa’s in Riccarton is our local church and is now joined with OLV and St. Bernadettes in the Christchurch West Parish.",
  "I am hopeful that the amalgamation will be an opportunity for the League to glean new members, and widen our service in the community.",
  "I believe there will be a League into the future, it may look somewhat different to now, as we now look different from the early days. My hopeful prayers are that there will be faithful, younger women to carry it on, when they find that busy hectic lives need spiritual nourishment and a space in their lives for “giving back to God.”",
];

export default function Page() {
  return (
    <PageShell eyebrow="Inspire" title="Why Become a Member">
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/bYXFd0e0sXM"
          title="Why Become a Member"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <section className={styles.story} aria-labelledby="story-heading">
        <h2 id="story-heading" className={styles.storyHeading}>
          A Member&rsquo;s Story
        </h2>

        {STORY.map((para, i) => (
          <p key={i} className={styles.para}>
            {para}
          </p>
        ))}

        <p className={styles.attribution}>
          <span className={styles.attributionName}>Liz Roche</span>
          CWL Christchurch Diocesan Council member
        </p>
      </section>
    </PageShell>
  );
}

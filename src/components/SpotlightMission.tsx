import Image from "next/image";
import styles from "./SpotlightMission.module.css";

export default function SpotlightMission() {
  return (
    <article className={styles.wrap}>
      <header className={styles.head}>
        <h2 className={styles.title}>Mission Communities</h2>
        <p className={styles.byline}>
          By Lorraine Macmillan, National Mission Secretary
        </p>
      </header>

      <div className={styles.photos}>
        <figure className={styles.photo}>
          <Image
            src="/images/spotlight/mission-lorraine-bishop.png"
            alt="Lorraine Macmillan with her husband Paul and Bishop Cardone in front of a painted map of the Solomon Islands"
            width={240}
            height={303}
            className={styles.photoImg}
          />
          <figcaption className={styles.photoCaption}>
            Lorraine with husband Paul and Bishop Cardone
          </figcaption>
        </figure>

        <figure className={styles.photo}>
          <Image
            src="/images/spotlight/mission-holy-cross-cathedral.png"
            alt="The altar and crucifix inside the open-air Holy Cross Cathedral, Honiara"
            width={334}
            height={284}
            className={styles.photoImg}
          />
          <figcaption className={styles.photoCaption}>
            Inside Holy Cross Cathedral, Honiara
          </figcaption>
        </figure>
      </div>

      <div className={styles.body}>
        <p>
          As National Mission Secretary I undertook a visit to the Solomon
          Islands and from the 15th&ndash;22nd May I stayed in Honiara (the main
          island and the capital). It had been a long, long time since anyone
          from the league had visited and currently, we, nationally, support 12
          Mission Communities; Christchurch Diocese CWL have 4 of those
          communities that we raise funds for.
        </p>

        <p>
          My initial impressions were of a very hot country (average temperature
          35C: 80&ndash;90% humidity) where the people live simply in small
          villages but are humble and welcoming. Many are employed but poorly
          paid and live hand-to-mouth; many families run road-side stalls built
          from whatever they can find, sometimes just under the shade of a
          market-type umbrella. They sell locally grown vegetables, bread,
          betelnut, bottled water and oil.
        </p>

        <p>
          Firstly, I made contact with Arch Bishop Chris Cardone OP who was very
          welcoming, very inclusive and informative, and also very realistic. He
          was able to confirm with me the communities/contacts we currently have
          there and, now, with his assistance, have a guaranteed line of
          communication and pathway for transferring funds to our mission
          communities.
        </p>

        <p className={styles.highlight}>
          In 2025 the CWL nationally donated $16,939 to their various mission
          communities in the Solomons and the Christchurch Diocese contribution
          within that was $4000.
        </p>

        <p>
          The Catholic Church is in great shape in the Solomons ably led by Arch
          Bishop Chris and a real highlight for me was attending 9am Sunday Mass
          (1 of 4 services held every Sunday) said by the Arch Bishop alongside
          over 2000 other parishioners in the beautiful open-air Holy Cross
          Cathedral.
        </p>

        <p>
          Hundreds of families attended, a secondary school choir sang, and 2
          small cultural groups performed as well as plenty of youth&mdash;their
          faith is visible, they are proud, devout and sincere!!! Mass lasted 90
          minutes&mdash;it was inspiring and refreshing.
        </p>

        <p>
          An absolute delight for me was being able to track down Sister
          Donna&mdash;a nun from the DMI Order (Daughters of Mary Immaculate)
          &ndash; the local sisters. She was the contact person for my own
          branches&rsquo; mission community (Greymouth)&mdash;we had lost contact
          through covid times.
        </p>

        <p>
          Sister Donna is a midwife at the Good Samaritan Hospital in the Tetere
          Parish&mdash;she told me they had delivered 70 babies in May and I saw
          her on the 20th May!!
        </p>

        <p>
          I was able to assist her by buying some basic food supplies (rice and
          tinned fish) for patients meals in the hospital. Families must feed
          their own family members in hospital and many cannot because of
          distance and poverty. I also arranged for a fridge/freezer to be
          delivered to her own house in late June&mdash;she has never had one!
        </p>

        <p className={styles.closing}>
          Life in The Solomons can be tough for many but generally I found the
          locals happy, friendly, clean and tidy and very grateful for anything
          you did for them.
        </p>
      </div>
    </article>
  );
}

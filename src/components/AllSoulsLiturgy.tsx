import Image from "next/image";
import styles from "./Resources.module.css";

const HYMN_VERSES = [
  {
    lead: "My Peace I leave You",
    text: "my peace I give you do not let your hearts be afraid, for I’m returning to my Father to prepare a home for you.",
  },
  {
    lead: "When I’m Gone",
    text: "I will send my spirit, who will guide and strengthen you and your joy will be found in giving with the peace and love he brings.",
  },
  {
    lead: "Come to me",
    text: "all you who labour and are burdened down with care, for I will give you comfort and rest for your weary hearts.",
  },
  {
    lead: "For the peace",
    text: "that I will give you is not the peace that the world expects in the world you will find sorrow, but have faith, I have conquered all.",
  },
];

const INTERCESSIONS = [
  "For all of us gathered here today, that we may live our lives close to God.",
  "For those grieving the loss of a family member that they may feel God’s love and comfort at this difficult time.",
  "For those who care for the dying, especially doctors, nurses, family members and our care home staff, that God may work through them to touch others.",
  "For those who have died and have no one to remember them. May they know the love of God.",
];

export default function AllSoulsLiturgy() {
  return (
    <section id="all-souls" className={styles.wrap}>
      <header className={styles.head}>
        <h2 className={styles.title}>
          Prayer service for the feast of All Souls
        </h2>
        <p className={styles.byline}>November 2nd</p>
      </header>

      <div className={styles.layout}>
        <div className={styles.article}>
          <div className={styles.section}>
            <p className={styles.rubric}>
              In the name of the Father and of the Son and of the Holy Spirit.
              Amen
            </p>
            <p>
              Today we honour All Souls Day, a time to remember and celebrate
              our loved ones who have gone before us. Let us come together in
              prayer and reflection, cherishing their memories and the love
              that continues to live within us. May they rest in peace.
            </p>
            <p>
              We remember the joy and love they brought us when they were alive
              and although we miss them terribly, we know that they are at
              peace and we live in the promise of God, that we will see them
              again, rejoicing in the Resurrection.
            </p>
            <p className={styles.note}>
              (If you wish to place the names of your loved ones on a piece of
              paper I will place them in the Holy Souls Box at Our Lady of
              Victories Church for you)
            </p>
            <p className={styles.quote}>
              Jesus said &ndash;{" "}
              <em>
                I am going to prepare a place for you. I will come back and
                take you to myself so that where I am you may be also. Where I
                am going, you know the way.
              </em>{" "}
              (John 14:1)
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subheading}>
              A reading from St Paul to the Thessalonians
            </h3>
            <p>
              We believe that Jesus died and rose again, and that it will be
              the same for all those who love Jesus. When they die God will
              bring them to Him. When we die, we will meet the Lord in Heaven
              and we will stay with him forever.
            </p>
            <p className={styles.note}>The word of the Lord</p>
          </div>

          <div className={styles.section}>
            <p className={styles.rubric}>Gospel for Holy Souls Feast Day</p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subheading}>Prayers of Intercession</h3>
            <ol className={styles.intercessions}>
              {INTERCESSIONS.map((prayer) => (
                <li key={prayer}>
                  {prayer}
                  <span className={styles.response}>Lord hear us.</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.section}>
            <p className={styles.rubric}>Our Father and Communion</p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subheading}>Hymn</h3>
            {HYMN_VERSES.map((verse) => (
              <p key={verse.lead}>
                <strong>{verse.lead}</strong> {verse.text}
              </p>
            ))}
          </div>

          <div className={styles.section}>
            <h3 className={styles.subheading}>
              The Autumn Leaves: A poem for the Resurrection
            </h3>
            <p className={`${styles.verse} ${styles.note}`}>
              <span>
                The Autumn leaves were laid to rest and now the leaves are
                green.
              </span>
              <span>
                And signs that God brings all to life, throughout the world and
                seen.
              </span>
              <span>And Jesus, is alive, they say and death is not the end</span>
              <span>
                We will rise again in Heaven’s light, with Jesus as our friend.
              </span>
            </p>
          </div>

          <div className={styles.section}>
            <p>
              We thank you Lord for bringing us together today to remember and
              celebrate the lives of our loved ones. We have loved them in life
              we will not forget them in death.
            </p>
            <p className={styles.rubric}>In the name of the Father&hellip;</p>
          </div>
        </div>

        <aside className={styles.media}>
          <Image
            src="/images/resources/all-souls-candle.jpg"
            alt="Hands cupped around a lit candle, with the words All Soul’s Day, remembering our loved ones"
            width={554}
            height={554}
            className={styles.mediaImg}
          />
          <Image
            src="/images/resources/all-souls-rosemary.jpg"
            alt="Flowering rosemary beside the words All Souls Day, November 2, 2026"
            width={346}
            height={163}
            className={styles.mediaImg}
          />
          <Image
            src="/images/resources/all-souls-gone-not-forgotten.jpg"
            alt="A white line drawing of a lily on a dark background beside a poem titled Gone But Not Forgotten"
            width={342}
            height={271}
            className={styles.mediaImg}
          />
          <Image
            src="/images/resources/all-souls-letter-from-heaven.jpg"
            alt="A poem titled A Letter from Heaven, by an unknown author, on a background of pink roses"
            width={303}
            height={447}
            className={styles.mediaImg}
          />
        </aside>
      </div>
    </section>
  );
}

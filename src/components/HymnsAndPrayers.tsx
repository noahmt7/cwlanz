import Image from "next/image";
import styles from "./Resources.module.css";

const SLIDE_WIDTH = 2000;
const SLIDE_HEIGHT = 1414;

const SLIDES = [
  {
    src: "/images/special-funds/slide-7.jpg",
    alt: "The CWL Hymn, sung to How Great Thou Art, with two verses and the refrain",
  },
  {
    src: "/images/special-funds/slide-8.jpg",
    alt: "Liturgy for our beloved deceased, with a prayer for departed League members, a sung Eternal Rest refrain, a rose, a candle and the CWL logo",
  },
  {
    src: "/images/special-funds/slide-9.jpg",
    alt: "Prayer for the deceased, which League members may pray at the funeral or vigil of a fellow member",
  },
  {
    src: "/images/special-funds/slide-10.jpg",
    alt: "The Catholic Women’s League prayer, asking the Holy Spirit to guide the League’s prayer and work",
  },
];

export default function HymnsAndPrayers() {
  return (
    <section id="hymns-and-prayers" className={styles.wrap}>
      <header className={styles.head}>
        <h2 className={styles.title}>Hymns &amp; Prayers</h2>
      </header>

      <div className={styles.slides}>
        {SLIDES.map((slide) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={SLIDE_WIDTH}
            height={SLIDE_HEIGHT}
            sizes="(max-width: 1040px) 100vw, 992px"
            className={styles.mediaImg}
          />
        ))}
      </div>
    </section>
  );
}

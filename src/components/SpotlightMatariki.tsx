import Image from "next/image";
import styles from "./SpotlightMatariki.module.css";

export default function SpotlightMatariki() {
  return (
    <article className={styles.wrap}>
      <figure className={styles.poster}>
        <Image
          src="/images/spotlight/matariki.png"
          alt="Matariki — Te Huinga o ngā Pīhopa Katorika o Aotearoa, New Zealand Catholic Bishops Conference"
          width={394}
          height={680}
          className={styles.posterImg}
        />
        <figcaption className={styles.posterCaption}>
          Te Huinga o ngā Pīhopa Katorika o Aotearoa
          <span>New Zealand Catholic Bishops Conference</span>
        </figcaption>
      </figure>

      <div className={styles.body}>
        <p className={styles.attribution}>
          Shared by the New Zealand Catholic Bishops Conference
        </p>

        <p>
          Matariki is a cluster of many stars. This cluster of stars signifies a
          framework upon which Māori life and the whole yearly cycle of life was
          built. It was so important that Māori would acknowledge the appearance
          of Matariki to signify the end of one year, the end of what had
          happened in the past, and the beginning of the new year with all its
          promise, hope, and goodness that the impending season would bring.
        </p>

        <blockquote className={styles.scripture}>
          <p>
            &ldquo;There is a time for everything, a season for every purpose
            under heaven: a season to be born and a season to die; a season to
            plant and a season to harvest. God has made everything in harmony
            with the divine.&rdquo;
          </p>
          <cite>Ecclesiastes 3:1</cite>
        </blockquote>

        <p className={styles.prayer}>
          E te Atua, God of the cycles and patterns of the universe and all
          living things whose ways we only begin to comprehend, open our hearts
          to the wonder of the natural world, to your incarnation throughout
          creation, and to your presence with and in us.
        </p>
      </div>
    </article>
  );
}

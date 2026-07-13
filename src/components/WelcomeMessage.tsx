import Image from "next/image";
import styles from "./WelcomeMessage.module.css";

export default function WelcomeMessage() {
  return (
    <div className={styles.wrap}>
      <figure className={styles.portrait}>
        <Image
          src="/images/board/sylvia.png"
          alt="Sylvia Mellish, National President of CWLANZ"
          width={200}
          height={220}
          className={styles.portraitImg}
        />
        <figcaption className={styles.portraitCaption}>
          Sylvia Mellish
          <span>National President</span>
        </figcaption>
      </figure>

      <p className={styles.mihi}>
        Tēnā koutou katoa. Ngā mihi nui e te Rōpū Wāhine Katorika Aotearoa New
        Zealand.
        <br />
        Ko Sylvia Mellish ahau. Ko periheteni o te motu.
      </p>

      <p>
        Greetings to you all. Welcome to our CWLANZ website. My name is Sylvia
        Mellish and I am privileged to be the National President of CWLANZ, the
        Catholic Women&rsquo;s League of Aotearoa New Zealand.
      </p>

      <p>
        The League was established in New Zealand in 1931 under the Bishops of
        NZ, with the main aim being to support the Mission Communities in the
        Pacific Region. Today the League in NZ is divided into four Diocesan
        Councils under a National Board encompassing the presidents of each
        diocese, special officers for the Missions and Social Issues and a Te
        Tikanga Māori Adviser.
      </p>

      <p>
        As an organisation within the Catholic Church in NZ we are united in
        promoting religious, social and intellectual interests while providing a
        charitable service. Operating under our motto &ldquo;Faith and
        Service&rdquo; members actively support local community needs, overseas
        missions, and educational institutes.
      </p>

      <p>
        We are a group of women who live, learn and love our faith. We enjoy
        each other&rsquo;s company, share, care, and have fun.
      </p>

      <p>
        I extend a warm welcome to you all to visit our website so that you can
        discover a little more about us, our stories and the work we do. I hope
        you enjoy your visit and extend a warm welcome to you to contact me
        should you require further information.
      </p>

      <p className={styles.signoff}>
        Ngā mihi nui
        <br />
        <span className={styles.signname}>Sylvia</span>
      </p>
    </div>
  );
}

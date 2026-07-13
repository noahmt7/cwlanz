import Image from "next/image";
import styles from "./WucwoContent.module.css";

const LOGO_SYMBOLS: { title: string; text: string }[] = [
  {
    title: "The World",
    text: "The place where the Christian acts and works so that the Evangelical values are lived: Peace, Justice, Solidarity, Mercy, Love.",
  },
  {
    title: "The two hands of women — one white and another of colour",
    text: "The presence of the faith-filled woman contributing “Feminine Genius” to construct a more human world.",
  },
  {
    title: "The dove with the olive branch",
    text: "The peace that the world needs.",
  },
  {
    title: "The Cross and the Crown",
    text: "Jesus invites us to construct the Kingdom, bringing God to earth.",
  },
];

const NEW_LOGO_POINTS: { num: string; title: string; text: string }[] = [
  {
    num: "1",
    title: "The open circle",
    text: "symbolises unity and represents a global community that is interconnected and open to others and to the world.",
  },
  {
    num: "2",
    title: "The integrated cross",
    text: "reinforces our Catholic identity.",
  },
  {
    num: "3",
    title: "The four female figures",
    text: "express diversity, solidarity and collective empowerment. Their movement conveys active participation, highlighting the leadership role of women in promoting dialogue, collaboration and meaningful change.",
  },
];

const AFFILIATED_REGIONS = [
  "Asia / Asia-Pacific",
  "Europe",
  "Latin America and the Caribbean",
  "North America",
];

export default function WucwoContent() {
  return (
    <div className={styles.wrap}>
      {/* Intro — classic logo + history */}
      <section className={styles.intro}>
        <figure className={styles.logoClassic}>
          <Image
            src="/images/wucwo/logo-classic.jpeg"
            alt="World Union of Catholic Women’s Organisations classic logo"
            width={260}
            height={260}
            className={styles.logoClassicImg}
          />
          <figcaption className={styles.motto}>
            Motto: &ldquo;listening to transform lives&rdquo;.
          </figcaption>
        </figure>

        <div className={styles.introText}>
          <p>
            In the early 1920&rsquo;s the International Federation of Catholic
            Women&rsquo;s Leagues changed its name to the World Union of Catholic
            Women&rsquo;s Organisations (WUCWO) to embrace other types of
            Catholic women&rsquo;s groups. In 1928, WUCWO was given
            representation on the League of Nations which led, in 1945, to
            consultative status on various United Nations organisations.
          </p>
          <p>
            CWLANZ has been part of WUCWO since 1948 when Miss Kathleen
            O&rsquo;Connor, first National President of CWLANZ, was invited onto
            the WUCWO Board. A National Special Officer, known as the
            International Secretary, liaises with WUCWO and branches celebrate the
            WUCWO World Day of Prayer in May each year. They also contribute to a
            special collection for the international work of WUCWO.
          </p>
        </div>
      </section>

      {/* Affiliated countries + International Secretary */}
      <section className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Affiliated Countries</h2>
          <ul className={styles.regionList}>
            {AFFILIATED_REGIONS.map((region) => (
              <li key={region}>{region}</li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.secretaryCard}`}>
          <Image
            src="/images/board/liz.png"
            alt="Liz Roche, International Secretary"
            width={120}
            height={120}
            className={styles.secretaryImg}
          />
          <div>
            <p className={styles.secretaryLabel}>International Secretary</p>
            <p className={styles.secretaryName}>Liz Roche</p>
            <a
              href="mailto:cwlanz.wucwointnlsec@gmail.com"
              className={styles.secretaryEmail}
            >
              cwlanz.wucwointnlsec@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Classic logo symbolism */}
      <section className={styles.symbolism}>
        <h2 className={styles.sectionHeading}>What the WUCWO logo depicts</h2>
        <div className={styles.symbolismGrid}>
          <ul className={styles.symbolList}>
            {LOGO_SYMBOLS.map((symbol) => (
              <li key={symbol.title}>
                <strong>{symbol.title}:</strong> {symbol.text}
              </li>
            ))}
          </ul>
          <figure className={styles.symbolFigure}>
            <Image
              src="/images/wucwo/logo-classic.jpeg"
              alt="WUCWO logo showing the cross, crown, dove and hands holding the world"
              width={220}
              height={220}
              className={styles.symbolFigureImg}
            />
          </figure>
        </div>
      </section>

      {/* New logo */}
      <section className={styles.newLogo}>
        <h2 className={styles.sectionHeading}>The WUCWO logo</h2>
        <div className={styles.newLogoGrid}>
          <figure className={styles.newLogoFigure}>
            <Image
              src="/images/wucwo/logo.jpeg"
              alt="Current minimalist WUCWO logo"
              width={240}
              height={240}
              className={styles.newLogoImg}
            />
            <figcaption>
              With its minimalist and modern aesthetic, this logo is
              understandable, simple and versatile. It will withstand the test of
              time and represent us faithfully for many years to come.
            </figcaption>
          </figure>

          <ol className={styles.pointList}>
            {NEW_LOGO_POINTS.map((point) => (
              <li key={point.num}>
                <span className={styles.pointNum}>{point.num}</span>
                <span>
                  <strong>{point.title}</strong> {point.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Photos */}
      <section className={styles.gallery}>
        <figure className={styles.photo}>
          <Image
            src="/images/wucwo/monica-pope-leo.png"
            alt="WUCWO President General Monica meeting Pope Leo"
            width={595}
            height={392}
            className={styles.photoImg}
          />
          <figcaption>
            WUCWO President General Monica with Pope Leo
          </figcaption>
        </figure>
        <figure className={styles.photo}>
          <Image
            src="/images/wucwo/nz-delegation-2025.png"
            alt="New Zealand delegation to WUCWO 2025"
            width={578}
            height={434}
            className={styles.photoImg}
          />
          <figcaption>NZ Delegation to WUCWO 2025</figcaption>
        </figure>
      </section>
    </div>
  );
}

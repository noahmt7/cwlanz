import Image from "next/image";
import styles from "./SpecialFundsSlides.module.css";

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
  {
    src: "/images/special-funds/slide-11.jpg",
    alt: "Updates on the Papal Synod — the Synod 2021 to 2023 logo, For a Synodal Church, beside Pope Francis cupping a hand to his ear to listen",
  },
  {
    src: "/images/special-funds/slide-12.jpg",
    alt: "World Union of Catholic Women’s Organisations — its history with CWLANZ since 1948, the meaning of its logo, affiliated regions, and International Secretary Liz Roche with her contact email",
  },
  {
    src: "/images/special-funds/slide-13.jpg",
    alt: "Mission in the Pacific — how CWL supports mission communities, a map of Nauru, Kiribati, Tuvalu, Solomon Islands, Samoa, Fiji, Vanuatu and Tonga, and National Mission Secretary Joan Lawn with her contact email",
  },
  {
    src: "/images/special-funds/slide-14.jpg",
    alt: "Descriptions of the Nathaniel Centre, the John Paul Centre, regional day raffles and donations to the World Union of Catholic Women’s Organisations",
  },
  {
    src: "/images/special-funds/slide-15.jpg",
    alt: "Special Funds — the National Mission Project and Mission Education Fund, which support mission work in the Pacific, and the Jubilee Fund, directed to a project with a Catholic connection",
  },
  {
    src: "/images/special-funds/slide-16.jpg",
    alt: "The annual Mission at Home appeal, instituted in 1990 for a different non-government-funded charity each year, with a list of past recipients including Diabetes NZ Youth Camps, I Am Hope and Tourettes",
  },
  {
    src: "/images/special-funds/slide-17.jpg",
    alt: "The Camelia Fund, which assists the National Council of Women, and the white camelia’s link to Kate Sheppard and women’s suffrage, with photos of camelias, the suffrage memorial and members at the 130-year celebrations",
  },
  {
    src: "/images/special-funds/slide-18.jpg",
    alt: "Father Law Home in Fiji, supported by the Christchurch Diocese with region day proceeds, with the home’s logo, photos of residents and visitors, and its Fiji’s Forgotten Fathers appeal",
  },
  {
    src: "/images/special-funds/slide-19.jpg",
    alt: "Fellowship of the Least Coin — how members’ smallest coins are collected to help women in poor countries, the logo of six praying hands forming a lotus flower, and the Fellowship prayer",
  },
  {
    src: "/images/special-funds/slide-20.jpg",
    alt: "Organizations we support with recurring donations — the Carmelite Sisters in Christchurch, their coat of arms, address and Mass times, candlelit sisters in their chapel, and items from their shop",
  },
];

export default function SpecialFundsSlides() {
  return (
    <div className={styles.slides}>
      {SLIDES.map((slide) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={SLIDE_WIDTH}
          height={SLIDE_HEIGHT}
          sizes="(max-width: 1040px) 100vw, 1000px"
          className={styles.slide}
        />
      ))}
    </div>
  );
}

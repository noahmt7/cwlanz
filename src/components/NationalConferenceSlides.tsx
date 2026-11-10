import Image from "next/image";
import styles from "./SpecialFundsSlides.module.css";

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

const SLIDES = [
  {
    src: "/images/national-conference/slide-1.jpg",
    alt: "CWLANZ National Conference, Christchurch, 14th and 15th July 2027. Venue: Hotel Elms, Papanui Road. With the CWL logo, a photo of a fountain in a Christchurch garden and pages from the Hotel Elms conference brochure",
  },
  {
    src: "/images/national-conference/slide-2.jpg",
    alt: "CWLANZ welcomes you to Christchurch — a collage around a Christchurch signpost, with things to do: ride the Gondola, catch a tram, visit the Antarctic Centre, roam the Riccarton Markets, see the site of the new Cathedral, walk in the hills, Riccarton Bush, go boating on the Avon, tour One Stadium and visit the street markets",
  },
  {
    src: "/images/national-conference/slide-3.jpg",
    alt: "CWLANZ extends a very warm welcome to you all to join us in Christchurch, the Garden City, in 2027 — with a CWLANZ National Conference July 2027 banner, the Come O Holy Spirit prayer and a photo of The Chalice sculpture in Christchurch",
  },
];

export default function NationalConferenceSlides() {
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

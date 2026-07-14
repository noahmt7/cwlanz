"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./Slideshow.module.css";

type Slide = {
  src: string;
  alt: string;
};

const SLIDES: Slide[] = [
  { src: "/images/slide-1.png", alt: "Faith and Service — Catholic Women's League Aotearoa New Zealand" },
  { src: "/images/slide-2.jpg", alt: "Two members admiring a carved stone sculpture in a sunlit rose garden" },
  { src: "/images/slide-3.jpg", alt: "Members wearing blue ceremonial stoles beside a religious statue in a garden" },
  { src: "/images/slide-4.jpg", alt: "A group of members with gardening gloves gathered under a tree on a community planting day" },
  { src: "/images/slide-5.jpg", alt: "Members walking a garden path lined with vivid orange azaleas in bloom" },
  { src: "/images/slide-6.jpg", alt: "A large gathering of members at the Bluff signpost on the Southland coast" },
];

const INTERVAL_MS = 5000;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;

  const goTo = useCallback((i: number) => {
    setIndex((i + count) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className={styles.slideshow} aria-roledescription="carousel" aria-label="Featured">
      <div className={styles.track}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.prev}`}
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className={`${styles.arrow} ${styles.next}`}
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
          >
            &#8250;
          </button>

          <div className={styles.dots} role="tablist" aria-label="Choose slide">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

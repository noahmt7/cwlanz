import Image from "next/image";
import styles from "./DiocesanGallery.module.css";

type Conference = {
  diocese: string;
  venue: string;
  note?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const CONFERENCES: Conference[] = [
  {
    diocese: "Auckland",
    venue: "Pukekohe",
    src: "/images/dio/auckland-pukekohe.png",
    alt: "Auckland diocesan conference at Pukekohe — members singing together, and scenes from the conference floor",
    width: 1227,
    height: 689,
  },
  {
    diocese: "Hamilton",
    venue: "Gisborne",
    src: "/images/dio/hamilton-gisborne.png",
    alt: "Hamilton diocesan conference at Gisborne — the officers’ table, and members holding candles during the liturgy",
    width: 1213,
    height: 691,
  },
  {
    diocese: "Wellington",
    venue: "Karori Wilton",
    src: "/images/dio/wellington-karori-wilton.png",
    alt: "Wellington diocesan conference at Karori Wilton — the conference group photo, guest speaker, and a view over Wellington harbour",
    width: 1236,
    height: 687,
  },
  {
    diocese: "Christchurch",
    venue: "Beckenham",
    note: "90th Anniversary — past and present Diocesan and National Presidents cutting the cake",
    src: "/images/dio/christchurch-beckenham.png",
    alt: "Christchurch diocesan conference at Beckenham — past and present presidents cutting the 90th anniversary cake, and members gathered in the hall",
    width: 1214,
    height: 681,
  },
];

export default function DiocesanGallery() {
  return (
    <div className={styles.wrap}>
      <p className={styles.intro}>
        Highlights from the 2026 diocesan conferences, where members from
        branches around each diocese came together for prayer, business and
        fellowship.
      </p>

      <section className={styles.gallery}>
        {CONFERENCES.map((conference) => (
          <figure key={conference.diocese} className={styles.photo}>
            <Image
              src={conference.src}
              alt={conference.alt}
              width={conference.width}
              height={conference.height}
              className={styles.photoImg}
            />
            <figcaption className={styles.caption}>
              <p className={styles.diocese}>{conference.diocese}</p>
              <p className={styles.venue}>at {conference.venue}</p>
              {conference.note && <p className={styles.note}>{conference.note}</p>}
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}

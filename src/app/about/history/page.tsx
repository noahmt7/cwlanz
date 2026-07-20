import PageShell from "@/components/PageShell";
import styles from "./history.module.css";

type Milestone = {
  year: string;
  place: string;
};

const TIMELINE: Milestone[] = [
  { year: "1906", place: "England" },
  { year: "1931", place: "CWL Aotearoa" },
  { year: "1936", place: "Christchurch" },
  { year: "1944", place: "Wellington" },
  { year: "1949", place: "Dunedin" },
];

type Fact = {
  label: string;
  body: string;
};

const PATRON_FACTS: Fact[] = [
  {
    label: "Chosen as patroness",
    body: "In 1943 the Catholic Women's League chose her as their patroness and began campaigning for her canonisation.",
  },
  {
    label: "Canonised",
    body: "It took until 1970, when St Margaret Clitherow became one of the 40 Martyrs of England and Wales. A multitude of CWL members attended the ceremony in Rome to see 27 years of prayers answered.",
  },
  {
    label: "Commemorated",
    body: "In 2008 the Bishop of Middlesbrough unveiled a commemorative plaque on Ouse Bridge in York, the place of her death.",
  },
  {
    label: "Feast day",
    body: "26 March. She is also remembered on 30 August alongside fellow martyrs St Anne Line and St Margaret Ward. The feast for the 40 Martyrs is 25 October.",
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="About" title="History" wide>
      <p className={styles.intro}>
        The Catholic Women&rsquo;s League was founded in England in 1906 by Miss
        Margaret Fletcher.
      </p>

      <div className={styles.layout}>
        <div className={styles.main}>
          <section aria-labelledby="beginnings-heading">
            <h2 id="beginnings-heading" className={styles.sectionHeading}>
              Beginnings
            </h2>
            <p className={styles.para}>
              Margaret&rsquo;s aim was to make Catholic women conscious of the
              contribution they could make, based on the teachings of the
              Church, to the social, intellectual and spiritual life of the
              community.
            </p>
          </section>

          <section aria-labelledby="aotearoa-heading">
            <h2 id="aotearoa-heading" className={styles.sectionHeading}>
              Coming to Aotearoa New Zealand
            </h2>
            <p className={styles.para}>
              In New Zealand, CWL was first established in 1931 by Bishop
              Liston, who had the ideal of the uniting of all Catholic women in
              New Zealand &mdash; a branch in every parish. The motto would be
              &lsquo;Faith and Service&rsquo;.
            </p>
            <p className={styles.para}>
              The first M&#257;ori Catholic Ladies League of Matamata was
              established in 1931, and in the same year branches were formed in
              Rotorua, Tauranga and Whakat&#257;ne.
            </p>
          </section>

          <section aria-labelledby="auckland-heading">
            <h2 id="auckland-heading" className={styles.sectionHeading}>
              Auckland and Hamilton
            </h2>
            <p className={styles.para}>
              In 1976 it was reported that there were 2,270 members in 70
              branches in Auckland. In 1980 the diocese was divided into two
              &mdash; Auckland and Hamilton.
            </p>
          </section>

          <section aria-labelledby="christchurch-heading">
            <h2 id="christchurch-heading" className={styles.sectionHeading}>
              Christchurch
            </h2>
            <p className={styles.para}>
              Christchurch was established in 1936 by Bishop Brodie, saying that
              the worldwide movement should inspire enthusiasm among Catholic
              women and ensure its success. Branches were established in Akaroa,
              Ashburton, Timaru, the Chatham Islands and Waimate. In 1968 there
              were 31 branches with 1,368 members, and in 1990 there were 26
              branches in the Christchurch Diocese.
            </p>
          </section>

          <section aria-labelledby="wellington-heading">
            <h2 id="wellington-heading" className={styles.sectionHeading}>
              Wellington and Dunedin
            </h2>
            <p className={styles.para}>
              Wellington&rsquo;s foundation meeting was in 1944. Bishop Whyte of
              Dunedin was then anxious that women of his flock should have the
              same advantage of support and friendship that those in the
              northern centres were experiencing, so Fr Gavin chaired the first
              meeting in 1949 with an attendance of 300 ladies.
            </p>
          </section>
        </div>

        <aside className={styles.aside} aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className={styles.asideHeading}>
            Timeline
          </h2>
          <ol className={styles.timeline}>
            {TIMELINE.map(({ year, place }) => (
              <li key={year} className={styles.event}>
                <span className={styles.year}>{year}</span>
                <span className={styles.place}>{place}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <section className={styles.profile} aria-labelledby="foundress-heading">
        <header className={styles.profileHeader}>
          <p className={styles.profileEyebrow}>CWL Foundress</p>
          <h2 id="foundress-heading" className={styles.profileName}>
            Margaret Fletcher
          </h2>
          <p className={styles.profileMeta}>
            Foundress of the Catholic Women&rsquo;s League, born in Oxford,
            England, on 12 December 1862 and died in December 1943 at the age of
            81.
          </p>
        </header>

        <div className={styles.profileLayout}>
          <div>
            <p className={styles.para}>
              At 17 Margaret attended the Slade School of Art in Chelsea. She
              continued her studies in Paris and met students of other
              nationalities, which gave her the opportunity for long discussions
              with them about life, religion and politics. She later returned to
              Oxford where she felt a strong urge to fight for improved
              educational opportunities for women. The suffrage movement had
              begun, but she saw many dangers in it.
            </p>
            <p className={styles.para}>
              An avid reader, Margaret always searched for the Truth. The turning
              point came for her after reading the writings of St John of the
              Cross. Having sought the advice of a priest friend, she decided to
              become a Catholic, and was received into the Church on 9 September
              1897. After this she took an active part in parish life and became
              friends with Mary Miller, who had travelled widely in Europe doing
              research work on Catholic secondary education for girls. It was
              from Mary that Margaret learned about a new Catholic organisation
              in Germany, established as an alternative to the secular National
              Council of Women.
            </p>
            <p className={styles.para}>
              Margaret&rsquo;s social action within the Church began with the
              launching of a quarterly called &lsquo;The Crucible&rsquo;. This
              was aimed at rousing the interest of teachers and schools to get
              better social education for women. It ran for eight years, and in
              one of its last issues came the proposal for a league of Catholic
              women.
            </p>
            <p className={styles.para}>
              This League became a reality in 1906 with Margaret Fletcher
              elected as its first president. She saw the League as the voice of
              Catholic women in the social questions of the time, supportive of
              the good in the feminist movement but opposed to its more radical
              demands. In the following years the League movement grew
              throughout England and America, and in 1910 twelve national
              Leagues formed the International Federation of Catholic
              Women&rsquo;s Leagues.
            </p>

            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>
                CWL needed women with &ldquo;balanced commonsense&rdquo;, who
                would &ldquo;utilise the average woman in convincing the Catholic
                world that business-like methods and intellectual gifts are
                excellent weapons in the service of God&rdquo;.
              </p>
              <cite className={styles.quoteAttr}>Margaret Fletcher</cite>
            </blockquote>
          </div>

          <div className={styles.factCard}>
            <h3 className={styles.factHeading}>At a glance</h3>
            <ul className={styles.facts}>
              <li className={styles.fact}>
                <span className={styles.factLabel}>Born</span>
                Oxford, England, 12 December 1862
              </li>
              <li className={styles.fact}>
                <span className={styles.factLabel}>Died</span>
                December 1943, aged 81
              </li>
              <li className={styles.fact}>
                <span className={styles.factLabel}>Received into the Church</span>
                9 September 1897
              </li>
              <li className={styles.fact}>
                <span className={styles.factLabel}>Founded CWL</span>
                1906, serving as its first president
              </li>
              <li className={styles.fact}>
                <span className={styles.factLabel}>International Federation</span>
                1910, formed by twelve national Leagues
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.profile} aria-labelledby="patron-heading">
        <header className={styles.profileHeader}>
          <p className={styles.profileEyebrow}>Our Patron Saint</p>
          <h2 id="patron-heading" className={styles.profileName}>
            Saint Margaret Clitherow
          </h2>
        </header>

        <div className={styles.profileLayout}>
          <div>
            <p className={styles.para}>
              In 1558 the Elizabethan era saw a return to Protestantism and
              equally harsh penalties for disobedience, with Catholics now on the
              receiving end. This was the world Margaret Clitherow grew up in. At
              the age of eighteen she married butcher John Clitherow, a widower
              with two small sons. The family lived in his house, the front room
              of which was the butchery &mdash; in the bustling Shambles in the
              centre of York.
            </p>
            <p className={styles.para}>
              It was around this time she started to explore Catholicism. After
              much soul searching, during which she &ldquo;found no substance,
              truth nor Christian comfort in the ministers of the new church, nor
              in their doctrine&rdquo;, she entered into the Catholic church.
            </p>
            <p className={styles.para}>
              Over the next few years Margaret continued to defy the authorities
              over non-attendance of services, which resulted in her spending
              time in prison, during which it&rsquo;s believed she gave birth to
              her third child, William. On her release she immediately arranged,
              along with some of her neighbours, to have Mass said at her home
              and give priests any protection needed.
            </p>
            <p className={styles.para}>
              Two years later, in March 1586, a young Flemish boy, terrified by
              threats of a beating, told the authorities where the secret room
              housing the chapel was located. Margaret was arrested and taken to
              the headquarters for questioning. When she refused to capitulate,
              she was thrown into a cell in the Castle prison. Margaret&rsquo;s
              fate had been sealed. Her husband and children were not allowed to
              see her, so she died without ever setting eyes on them again.
            </p>
            <p className={styles.para}>
              On Friday the 25th of March 1586, Margaret Clitherow was taken to
              the Tolbooth on Ouse Bridge in York, where a small crowd awaited to
              witness her execution. On being told to confess that she died for
              treason, she answered that she died &ldquo;for the love of my Lord
              Jesu&rdquo;.
            </p>
            <p className={styles.para}>
              She then lay on the floor. A stone was placed under her back, a
              heavy door laid on top of her, and her arms stretched out and tied
              to two posts. Margaret&rsquo;s last words were &ldquo;Jesu! Jesu!
              Jesu! have mercy on me!&rdquo; She died 15 minutes later, though her
              body lay there until midnight when it was removed and buried in a
              city rubbish dump. It took her friends several weeks to find it,
              but when they did, they went to great lengths to keep secret the
              place where she was given a Catholic burial. Even today it&rsquo;s
              not known where Margaret Clitherow was laid to rest.
            </p>

            <p className={styles.source}>
              Originally published in the Marist Messenger (abridged).
            </p>
          </div>

          <div className={styles.factCard}>
            <h3 className={styles.factHeading}>Patroness of CWL</h3>
            <ul className={styles.facts}>
              {PATRON_FACTS.map(({ label, body }) => (
                <li key={label} className={styles.fact}>
                  <span className={styles.factLabel}>{label}</span>
                  {body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

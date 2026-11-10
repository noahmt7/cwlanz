import Image from "next/image";
import styles from "./Resources.module.css";

const PROMPTS = [
  "Slow down",
  "Be aware of your surroundings",
  "Look up",
  "Look down",
  "Be ‘present’",
  "Live in the “Mystery”",
  "‘Be’ rather than ‘do’",
  "Be still",
  "Be quiet",
  "Surrender to the moment",
  "Feel the peace",
  "See nature at work",
  "Feel the earth beneath you",
  "Allow yourself to be at one with nature",
  "Be content with your own company",
  "Maybe sing a hymn in your head",
];

const QUESTIONS = [
  "What was it like for me today?",
  "What did I notice? Within me, around me?",
  "Is there something new here for me?",
  "Where did I encounter God / His Presence / Mystery?",
  "What action do I sense God calling me to?",
];

const TECHNIQUES = [
  "Build a picture or image in your mind of somewhere you have been that you loved",
  "Where do you go to find peace – physically or in your mind?",
  "Shut yourself off – just for a few minutes to re-energize",
  "Try yoga or meditation – music, poetry – go for a contemplative walk",
];

function Verse({ lines }: { lines: string[] }) {
  return (
    <p className={styles.verse}>
      {lines.map((line, i) => (
        <span key={i}>{line}</span>
      ))}
    </p>
  );
}

export default function ContemplativeWalk() {
  return (
    <section id="contemplative-walk" className={styles.wrap}>
      <header className={styles.walkHead}>
        <Image
          src="/images/resources/walk-prayer.jpg"
          alt="A person sitting in silhouette at sunset, with the words Prayer, teach us to pray"
          width={319}
          height={318}
          className={styles.walkHeadImg}
        />
        <div>
          <h2 className={styles.title}>Contemplative Walk</h2>
          <p className={styles.byline}>Acknowledgement &ndash; Bede Haughey</p>
        </div>
      </header>

      <div className={styles.prose}>
        <div className={styles.section}>
          <h3 className={styles.subheading}>
            Prayers and Reflections to use at beginning or end of contemplative
            walk
          </h3>
          <blockquote className={styles.quote}>
            <p>
              Contemplation is a way of slowing down&hellip; So as to descend
              into the depths of yourself in the present moment where God
              [Unitive Love] lies waiting to grant you a deep experience of
              your eternal oneness with all creation and Creator.
            </p>
            <p className={styles.attribution}>James Finley</p>
          </blockquote>
          <blockquote className={styles.quote}>
            <p>
              Christian spirituality proposes an alternative understanding of
              the quality of life, and encourages a prophetic and contemplative
              lifestyle, one capable of deep enjoyment free of the obsession
              with consumption&hellip;To be serenely present to each reality,
              however small it may be, opens us to much greater horizons of
              understanding and personal fulfilment&hellip;It is a return to
              that simplicity which allows us to stop and appreciate the small
              things, to be grateful for the opportunities which life affords
              us&hellip;
            </p>
            <p className={styles.attribution}>Laudato Si&rsquo; 222</p>
          </blockquote>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subheading}>Psalm 139:7&ndash;10</h3>
          <Image
            src="/images/resources/walk-praying.jpg"
            alt="A woman with her eyes closed and her hands joined in prayer"
            width={131}
            height={131}
            className={styles.float}
          />
          <Verse
            lines={[
              "Where can I go from your spirit? Or where can I flee from your presence?",
              "If I ascend to heaven, you are there; if I make my bed in Sheol, you are there.",
              "If I take the wings of the morning and settle at the farthest limits of the sea,",
              "even there your hand shall lead me, and your right hand shall hold me fast.",
            ]}
          />
          <Verse
            lines={[
              "O Creator God, open our hearts and our eyes to the wonder of your presence among us.",
              "May we see the signs of your beauty within us and about us",
              "And ever be in awe of the simple gifts of life.",
              "Help us reach beyond ourselves",
              "And to give thanks for all your creation that shares this universe with us:",
              "Peoples of every nation, Animals of every species,",
              "All forms of vegetation, The planets, stars, and all the elements.",
              "We pray this in union with the Incarnate Word in whose image all was created.",
              "Amen",
            ]}
          />
        </div>

        <div className={styles.section}>
          <h3 className={styles.subheading}>Inspire in us a spirit of awe</h3>
          <Image
            src="/images/resources/walk-autumn-tree.jpg"
            alt="A tree with red autumn leaves in a garden"
            width={175}
            height={131}
            className={styles.float}
          />
          <Verse
            lines={[
              "Divine Creator, God,",
              "We thank You for the wonder of the universe",
              "and its eons of time and life that has sustained us.",
              "We thank You for our sister mother earth, her beauty and",
              "the bounty of her days and her sacred ground.",
            ]}
          />
          <Verse
            lines={[
              "Sadly, we have abused earth’s sacred space and have misread its sacred story,",
              "claiming it as our own, opposing Your divine plan.",
              "Its gift of sustainability has been snatched away, diminishing its sustenance for the good of all.",
              "Yes, we can hear its anguished cries of pain and its resources stripped bare,",
              "its climate distorted its water and soil poisoned, its landscape unable to cope.",
            ]}
          />
          <Image
            src="/images/resources/walk-galaxy.jpg"
            alt="A blue and violet galaxy of stars"
            width={180}
            height={159}
            className={styles.float}
          />
          <Verse
            lines={[
              "Creator God,",
              "Help us to care for sister mother earth",
              "with loving attention to its sacred journey.",
              "As it gives of itself without measure.",
              "Inspire in us a spirit of awe for its beauty and many life forms.",
              "And may we be thankful knowing that it waits unceasingly",
              "to refurbish itself for our sake.",
              "Amen.",
            ]}
          />
          <p className={styles.attribution}>
            Sr. Maura Fitzsimons, PBVM, Laudato Si&rsquo; Animator, Mississippi
            USA.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subheading}>Contemplative Walk</h3>
          <div className={styles.walkMain}>
            <Image
              src="/images/resources/walk-forest.jpg"
              alt="Autumn forest with tall trunks and a stone pagoda, framed in a circle"
              width={738}
              height={698}
              className={styles.forest}
            />
            <div>
              <ul className={styles.prompts}>
                {PROMPTS.map((prompt) => (
                  <li key={prompt}>{prompt}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            Are there any outside noises that disturb you? Concentrate on your
            inner feelings and senses.
          </p>
          <p>
            Focus on the moment rather than walk around too much &ndash; you
            might miss something!
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subheading}>Review: Contemplative Walk</h3>
          <Image
            src="/images/resources/walk-path.jpg"
            alt="A narrow path winding through a green forest"
            width={153}
            height={139}
            className={styles.float}
          />
          <p className={styles.note}>
            (We are all in the same location but we share diverse experiences)
          </p>
          <ul className={styles.questions}>
            {QUESTIONS.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
          <div className={styles.smallPhotos}>
            <Image
              src="/images/resources/walk-beetles.jpg"
              alt="Beetles on a piece of bark"
              width={98}
              height={64}
            />
            <Image
              src="/images/resources/walk-ladybirds.jpg"
              alt="Two ladybirds on a green leaf"
              width={90}
              height={68}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subheading}>
            Try this technique at home or anywhere at any time when you need to
            de-stress
          </h3>
          <ul className={styles.list}>
            {TECHNIQUES.map((technique) => (
              <li key={technique}>{technique}</li>
            ))}
          </ul>
        </div>

        <p className={styles.credit}>
          Rearranged by Sylvia Mellish for CWLANZ &copy; 2026
        </p>
      </div>
    </section>
  );
}

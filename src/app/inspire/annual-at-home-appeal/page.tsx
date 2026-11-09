import Image from "next/image";
import PageShell from "@/components/PageShell";
import styles from "./annual-at-home-appeal.module.css";

type Section = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
};

const SECTIONS: Section[] = [
  {
    paragraphs: [
      "Dementia is an umbrella term for a collection of symptoms that are caused by disorders affecting the brain, and impact on memory, thinking, behaviour and emotion. Alzheimer’s Disease is the most common form of dementia, accounting for somewhere between 50-75% of all dementias (ADI 2023).",
      "Once dementia has been diagnosed, it is useful to try and decide what is causing it; by knowing the type of dementia you can have some idea of its likely course. It is not always possible to decide on the type of dementia and to make it more complicated, two forms may be present in a “mixed dementia” e.g. both Alzheimer’s and vascular dementia.",
      "This disease was first described in 1906 by a German neurologist, Alois Alzheimer. Microscopically, his patient’s brain showed characteristic changes: plaques and tangles. The plaques are caused by a build-up of an abnormal protein called “amyloid” outside the brain cells. The tangles inside the brain cells are formed by another protein called “tau”. The abnormal proteins prevent messages from being passed between cells, damage connections and eventually cause cell death. As the cells die, the brain shrinks. This brain damage probably starts decades before dementia becomes apparent, but at a certain point, the brain stops compensating for cell loss and cannot function properly.",
    ],
  },
  {
    heading: "Symptoms",
    paragraphs: [
      "The following symptoms may occur in all types of dementia including Alzheimer’s Disease:",
    ],
    list: [
      "Memory loss, especially for recent events, though later on longer term memory is also affected.",
      "New learning declines.",
      "Reduction in the ability to pay attention when there are other things going on around the person",
      "e.g. it may be difficult to think when the TV is on in the background or doing two things at once e.g. continuing a conversation while preparing a meal. Need to focus on one task at a time.",
      "Difficulties planning and making decisions. Not being flexible in shifting between tasks.",
      "Language problems such as difficulty expressing oneself and understanding others, forgetting words and making grammatical errors.",
      "Changes in perception and motor function. This might mean that the person has difficulty judging distance, recognising faces, or performing tasks like doing up buttons.",
      "Changes in social behaviour e.g. not greeting or farewelling others, forgetting how to use cutlery, (though social skills are often present for a long time in Alzheimer’s Disease).",
    ],
  },
  {
    heading: "Making the Diagnosis",
    paragraphs: [
      "The diagnosis is made when the course follows the usual pattern of Alzheimer’s Disease and nothing else is found that could cause the dementia. (This is a “diagnosis of exclusion”.) The diagnosing doctor will take a medical history from the patient and someone who knows them, examine the person, do cognitive tests (usually the mini-ACE, but maybe a longer test - the ACE), order blood/urine tests and possibly arrange a CT brain scan. There is no definitive test for Alzheimer’s, although some sophisticated scans, not widely available (amyloid PET scans) can be very useful. Genetic testing helps if there is a family history of Alzheimer’s Disease. GPs can follow a “Cognitive Impairment Pathway” to make the diagnosis and there are specialists available for consultation.",
    ],
  },
  {
    heading: "Characteristics and course of Alzheimer’s Disease",
    paragraphs: [
      "The onset of Alzheimer’s disease is often hard to pinpoint as it begins so subtly. Usually memory and learning problems occur early on, although people behave normally in social situations even late in the condition. The progression is gradual and smooth without plateaus. About 80% of people with Alzheimer’s Disease develop psychological and/or behavioural problems such as anxiety, depression or apathy early on, and psychosis, irritability, agitation or walking away and getting lost in the mid-late stages. With severe Alzheimer’s Disease incontinence, gait disturbance, difficulty swallowing, and seizures occur. A rough estimate of survival time after diagnosis is between 8-15 years.",
    ],
  },
  {
    heading: "Who gets Alzheimer’s Disease?",
    paragraphs: [
      "Generally, Alzheimer’s is a disease of old age. However, it can begin in people, who are 65 years and younger. People with Down syndrome and their first-degree relatives are more likely to develop Alzheimer’s Disease than the general population. There are rare familial forms of inherited Alzheimer’s Disease that begin in younger people. Anyone carrying two “APOE4” genes has a slightly increased risk. You can be tested for APOE4, but this is not necessarily helpful information, since if you live long enough your chances of getting dementia are quite high anyway. People with traumatic brain injury are also more at risk. By the age of 90 you have a 50% chance of having dementia of one type or another.",
    ],
  },
  {
    heading: "Risk Reduction",
    paragraphs: [
      "Research has shown that the following things decrease the risk of developing Alzheimer’s Disease:",
    ],
    list: [
      "Physical activity",
      "Social activity - avoiding loneliness",
      "Mental activity - trying new and challenging intellectual activities",
      "Stopping smoking",
      "Managing blood pressure, cholesterol, blood sugar and weight",
      "Good food choices: Mediterranean diet",
      "Protecting your head",
      "Reducing stress",
      "Actively preventing or treating late life depression",
      "Attending to hearing loss as soon as possible",
    ],
  },
  {
    heading: "Treatment",
    paragraphs: [
      "Drug Treatment: There are four drug treatments that help some people with Alzheimer’s disease. These treatments may slow the progression of the disorder but do not very often restore skills that are lost. The medications available in New Zealand are: donepezil, rivastigmine, galantamine and memantine. Only donepezil tablets and rivastigmine patches are funded, so the others must be paid for privately.",
      "Non-drug treatments: Doing the things that reduce risk (above), also slows the rate of decline in Alzheimer’s Disease Cognitive Stimulation Therapy (CST) has been shown to improve symptoms in most forms of dementia. In Cognitive Stimulation Therapy, the group carries out a range of enjoyable activities that provide general stimulation for thinking, concentration and memory. Cognitive Stimulation Therapy is available through many Dementia NZ branches.",
    ],
  },
];

export default function Page() {
  return (
    <PageShell eyebrow="Annual 'At Home' Appeal" title="Alzheimers NZ" wide>
      <div className={styles.layout}>
        <aside className={styles.media}>
          <Image
            src="/images/alzheimers/alzheimers-nz-logo.jpg"
            alt="Alzheimers New Zealand logo"
            width={393}
            height={375}
            className={styles.logo}
          />
          <Image
            src="/images/alzheimers/about-dementia-cover.jpg"
            alt="Cover of the Alzheimers New Zealand booklet About dementia, Mō te mate wareware: a guide for people diagnosed with dementia"
            width={512}
            height={716}
            className={styles.cover}
          />
        </aside>

        <article className={styles.article}>
          <h2 className={styles.heading}>Alzheimer&rsquo;s Disease</h2>

          {SECTIONS.map((section, i) => (
            <section key={i} className={styles.section}>
              {section.heading && (
                <h3 className={styles.subheading}>{section.heading}</h3>
              )}
              {section.paragraphs.map((para, j) => (
                <p key={j} className={styles.para}>
                  {para}
                </p>
              ))}
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <footer className={styles.footer}>
            <p>
              This publication provides a general summary only of the subject
              matter covered. People should seek professional advice about
              their specific case. The content was adapted from Alzheimer&rsquo;s
              Australia who have generously consented to their work being used.
              Written and peer reviewed: 2017 by Dr Chris Perkins and Dr Richard
              Worrall, Psychiatrists of Old Age. Reviewed by Dr Tina Crownshaw,
              Psychiatrist of Old Age 2023.
            </p>

            <div className={styles.contact}>
              <p className={styles.contactIntro}>
                Dementia New Zealand offers support, information and education.
              </p>
              <p>
                <strong>Dementia Helpline:</strong>{" "}
                <a href="tel:0800433636">0800 433 636</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@dementia.nz">info@dementia.nz</a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.dementia.nz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.dementia.nz
                </a>
              </p>
            </div>

            <p className={styles.copyright}>
              &copy; Dementia New Zealand 2023, all rights reserved. Revised May
              2023
            </p>
          </footer>
        </article>
      </div>
    </PageShell>
  );
}

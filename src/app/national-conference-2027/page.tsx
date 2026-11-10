import PageShell from "@/components/PageShell";
import NationalConferenceSlides from "@/components/NationalConferenceSlides";

export default function Page() {
  return (
    <PageShell eyebrow="Quick Links" title="National Conference 2027" wide>
      <NationalConferenceSlides />
    </PageShell>
  );
}

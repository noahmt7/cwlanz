import PageShell from "@/components/PageShell";
import DiocesanGallery from "@/components/DiocesanGallery";

export default function Page() {
  return (
    <PageShell eyebrow="Inform" title="Diocesan Conferences 26" wide>
      <DiocesanGallery />
    </PageShell>
  );
}

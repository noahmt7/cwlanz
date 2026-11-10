import PageShell from "@/components/PageShell";
import SpecialFundsSlides from "@/components/SpecialFundsSlides";

export default function Page() {
  return (
    <PageShell eyebrow="Missions" title="Special Funds" wide>
      <SpecialFundsSlides />
    </PageShell>
  );
}

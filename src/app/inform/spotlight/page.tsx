import PageShell from "@/components/PageShell";
import SpotlightMatariki from "@/components/SpotlightMatariki";
import SpotlightMission from "@/components/SpotlightMission";

export default function Page() {
  return (
    <PageShell eyebrow="Inform" title="Spotlight" wide>
      <SpotlightMatariki />
      <SpotlightMission />
    </PageShell>
  );
}

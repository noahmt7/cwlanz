import PageShell from "@/components/PageShell";
import SynodResponse from "@/components/SynodResponse";

export default function Page() {
  return (
    <PageShell eyebrow="Inform" title="Communiqués">
      <SynodResponse />
    </PageShell>
  );
}

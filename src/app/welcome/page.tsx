import PageShell from "@/components/PageShell";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function Page() {
  return (
    <PageShell eyebrow="Home" title="Harere Mai — Welcome">
      <WelcomeMessage />
    </PageShell>
  );
}

import PageShell from "@/components/PageShell";
import Calendar from "@/components/Calendar";

export default function Page() {
  return (
    <PageShell eyebrow="Home" title="Calendar" wide>
      <Calendar />
    </PageShell>
  );
}

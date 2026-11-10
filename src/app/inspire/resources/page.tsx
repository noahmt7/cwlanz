import PageShell from "@/components/PageShell";
import AllSoulsLiturgy from "@/components/AllSoulsLiturgy";
import ContemplativeWalk from "@/components/ContemplativeWalk";
import styles from "@/components/Resources.module.css";

export default function Page() {
  return (
    <PageShell eyebrow="Inspire" title="Resources" wide>
      <nav className={styles.jump} aria-label="Resources on this page">
        <a href="#all-souls">All Souls Liturgy</a>
        <a href="#contemplative-walk">Contemplative Walk</a>
      </nav>

      <AllSoulsLiturgy />
      <ContemplativeWalk />
    </PageShell>
  );
}

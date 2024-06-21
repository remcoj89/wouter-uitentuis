import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import styles from "./page.module.css";
import UspSection from "@/ui/sections/usp-section/usp-section.component";
import CtaSection from "@/ui/sections/cta-section/cta-section.component";

// Components
export default function Home() {
  return (
    <>
       <HeroSection />
      <main className={styles.main}>
        <UspSection />
        <CtaSection />
      </main>
    </>
  );
}

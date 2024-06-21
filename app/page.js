import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import styles from "./page.module.css";
import UspSection from "@/ui/sections/usp-section/usp-section.component";

// Components
export default function Home() {
  return (
    <>
      {/* Hero Section */}
       <HeroSection />
      <main className={styles.main}>
        <UspSection />
      </main>
    </>
  );
}

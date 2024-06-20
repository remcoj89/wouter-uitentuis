import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import styles from "./page.module.css";

// Components
export default function Home() {
  return (
    <>
      {/* Hero Section */}
       <HeroSection />
      <main className={styles.main}>
      </main>
    </>
  );
}

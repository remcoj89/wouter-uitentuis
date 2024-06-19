
import Navbar from "@/ui/components/nav-component/nav-bar.component";
import styles from "./page.module.css";

// Components
export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section id="hero" className="wrapper">
          <h2>Hero Section</h2>
        </section>
      </main>
    </>
  );
}

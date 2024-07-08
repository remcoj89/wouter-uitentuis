// Styles
import Styles from "../page.module.css";
// Hooks
import Image from 'next/image'

// Components
import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import UspSection from "@/ui/sections/usp-section/usp-section.component";
import CtaSection from "@/ui/sections/cta-section/cta-section.component";
import SocialProof from "@/ui/sections/social-proof-section/social-proof.component";
import CardComponent from "@/ui/components/card/card.component";
import ProjectSection from '@/ui/sections/project-section/project-section.component';
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component';
import Gallery from '@/ui/sections/gallery-section/gallery.component';
import ContactSection from '@/ui/sections/contact-section/contact-section.component';


export default function BigGreen() {
  return (
    <>
      <HeroSection />
      <main className={Styles.main}>
        <UspSection />
        <SocialProof >
          Social Proof
        </SocialProof>
        <ProjectSection />
        <CtaSectionWithBgImage />
        <Gallery />
        <ContactSection />
      </main>
    </>
  )
}

// Styles
import Styles from '../page.module.css'

// Components
import UspSection from '@/ui/sections/usp-section/usp-section.component'
import HeroSection from "@/ui/sections/hero-section/hero-section.component"
import SocialProof from '@/ui/sections/social-proof-section/social-proof.component'
import ProjectSection from '@/ui/sections/project-section/project-section.component'
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component'
import Gallery from '@/ui/sections/gallery-section/gallery.component'
import ContactSection from '@/ui/sections/contact-section/contact-section.component'

export default function Hovenier() {
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

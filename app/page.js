// Hooks
import Image from 'next/image'

// Components
import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import styles from "./page.module.css";
import UspSection from "@/ui/sections/usp-section/usp-section.component";
import CtaSection from "@/ui/sections/cta-section/cta-section.component";
import SocialProof from "@/ui/sections/social-proof-section/social-proof.component";
import CardComponent from "@/ui/components/card/card.component";
import ProjectSection from '@/ui/sections/project-section/project-section.component';
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component';
import Gallery from '@/ui/sections/gallery-section/gallery.component';
import ContactSection from '@/ui/sections/contact-section/contact-section.component';



export default function Home() {

  const clubLogos = [
    {
      imageUrl: "/assets/images/field-management/logos/logo-afc-34.png",
      altText: "logo Afc 34"
    },
    {
      imageUrl: "/assets/images/field-management/logos/logo-az.png",
      altText: "logo Az Alkmaar"
    },
    {
      imageUrl: "/assets/images/field-management/logos/logo-goahead-eagels.png",
      altText: "logo Goahead Eagles"
    },
    {
      imageUrl:  "/assets/images/field-management/logos/logo-kolping-boys.png",
      altText: "Kolping Boys"
    },
    { imageUrl:  "/assets/images/field-management/logos/logo-sporting-s.png",
      altText: "Sporting S"
    }

  ]

  return (
    <>
       <HeroSection />
       <ContactSection />

      <main className={styles.main}>
        <UspSection />
        <CtaSection />
        <SocialProof >
          {clubLogos.map((logo, i) => {
            <ProjectSection />
            return (
              <CardComponent cardStyle='logoCard' key={i}>
              <Image src={logo.imageUrl} alt={logo.altText} height={200} width={200}/>
            </CardComponent>
            )
          })}
        </SocialProof>
        <ProjectSection />
        <CtaSectionWithBgImage />
        <Gallery />

      </main>
    </>
  );
}

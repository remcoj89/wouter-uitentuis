'use client'
// Styles
import Styles from '../page.module.css'

// Hooks
import {useState, useEffect} from 'react';

// Components
import UspSection from '@/ui/sections/usp-section/usp-section.component'
import HeroSection from "@/ui/sections/hero-section/hero-section.component"
import SocialProof from '@/ui/sections/social-proof-section/social-proof.component'
import ProjectSection from '@/ui/sections/project-section/project-section.component'
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component'
import Gallery from '@/ui/sections/gallery-section/gallery.component'
import ContactSection from '@/ui/sections/contact-section/contact-section.component'
import CtaSection from '@/ui/sections/cta-section/cta-section.component'
import CardComponent from '@/ui/components/card/card.component'
import { ArrowRightIcon } from '@/assets/icons';

const pageContent = {
  heroSection:
      {
      heroTitle: "Creëer Uw Perfecte Buitenleven",
      subTitle: "Maak Uw Tuin Klaar voor Elk Seizoen",
      backGroundImage: "/assets/images/gardener/hovenier-hero-image.jpg",
      image1: {imageUrl: "/assets/images/gardener/gras-veld.jpg", altText: "image 1"},
      image2: {imageUrl: "/assets/images/gardener/achter-tuin.jpg", altText: "image 1"},
      image3: {imageUrl: "/assets/images/gardener/terras.jpg", altText: "image 1"}
    },
    uspSection: [
      {
        title: "Snoeien en trimmen",
        description: "Behoudt de vorm en gezondheid van planten en struiken, waardoor de esthetiek wordt verbeterd. Dit bevordert ook de groei en voorkomt overwoekering.",
        iconUrl: "/assets/images/gardener/garden-icon-flower.svg"
      },
      {
        title: "Seizoensgebonden onderhoud",
        description: "Voert onderhoud uit passend bij elk seizoen, wat de tuin voorbereidt op veranderende weersomstandigheden. Dit zorgt voor een goed onderhouden tuin gedurende het hele jaar.",
        iconUrl: "/assets/images/gardener/garden-icon-shovel.svg"
      },
      {
        title: "Tuinrenovatie",
        description: "Vernieuw verouderde of beschadigde tuinen, wat de esthetische waarde en functionaliteit verhoogt. Dit maakt de tuin weer aantrekkelijk en gebruiksvriendelijk.",
        iconUrl: "/assets/images/gardener/garden-icon-garden-cart.svg"
      },
    ],
    ctaSection: {
      ctaTitle: "Samen voor een Perfecte Tuin!",
      ctaSubtitle: "Wilt u weten hoe wij het beheer van uw velden kunnen optimaliseren? Ontdek de voordelen en laat ons uw velden perfectioneren.",
      imageUrl: "/assets/images/gardener/achtertuin-met-vijver.jpg",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    socialProofSection: {
      startYear: 2013,
      numberOfGardens: 132,
      grasPlanted: 6600,
    },
    ProjectSection: [
      {
        projectTitle: "'Heerlijke rustieke tuin'",
        projectDescription: {
          paragraph1: "In het eerste jaar dat de trainingsvelden werden opgeleverd, nu vijf jaar geleden, kon nog niemand bevroeden hoe slecht het gras zou groeien. Er ontstonden veel kale grasplekken, vooral bij de overlap van de sproeiers.",
          paragraph2: "Na het eerste seizoen is met een fieldtopmaker 2 cm van de graslaag af gefreesd, opnieuw ingezaaid en bemest. Door de warme en droge zomer in het jaar erop, verbrandde het opkomende gras direct.",
          paragraph3: "We hebben ons toen afgevraagd wat daar de oorzaak van was en zijn gaan zoeken. We kwamen erachter dat het met het zoute gietwater had te maken. Met deze kennis zijn we de velden veel meer gaan besproeien om het zout weg te duwen. Soms wel 40 tot 50 ml/m2 per nacht. Normaal geven we afhankelijk van de tijd in het jaar tussen de 10 en 15 ml/m2.",
        },
        projectImage: {
          imageUrl: "/assets/images/gardener/achtertuin-met-vijver.jpg",
          altText: "Achter tuin met vijver"
        }
      },
      {
        projectTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        projectDescription: {
          paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?",
          paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?",
          paragraph3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?",
        },
        projectImage: {
          imageUrl: "/assets/images/field-management/hero_image-3.png",
          altText: "project Image"
        }
      },
      {
        projectTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        projectDescription: {
          paragraph1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?",
          paragraph2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?",
          paragraph3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?",
        },
        projectImage: {
          imageUrl: "/assets/images/field-management/hero_image-3.png",
          altText: "project Image"
        }
      },
    ],
    secondCta: {
      ctaTitle: "Uw Tuin, Onze Zorg!",
      ctaSubtitle: "Wilt u weten wat wij voor uw tuin kunnen betekenen? Laten we samenwerken voor een prachtig stukje groen!",
      imageUrl: "/assets/images/gardener/voortuin.jpg",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    contactSection: {
      imageUrl: "/assets/images/gardener/handschoenen.avif"
    }
   }

export default function Hovenier() {
  const [yearsActive, setYearsActive] = useState(null)

  useState(() => {
    const currentYear = new Date().getFullYear();
    const startYear = pageContent.socialProofSection.startYear

    return  setYearsActive(currentYear - startYear)
  })


  return (
    <>
      <HeroSection sectionContent={pageContent.heroSection} />

      <main className={Styles.main}>
        <UspSection bennefits={pageContent.uspSection} />
        <CtaSection ctaContent={pageContent.ctaSection} />
        <SocialProof >
          <CardComponent cardStyle='socialProofCard' >
              <h3>{yearsActive}</h3>
              <span>Jaar actief als hovenier </span>

          </CardComponent>
          <CardComponent cardStyle='socialProofCard' >
            <h3>&gt; 132</h3>
            <span>Aangelegde Tuinen </span>
          </CardComponent>
          <CardComponent cardStyle='socialProofCard' >
            <h3>&gt; 66000km2</h3>
            <span>Gras gezaaid</span>
          </CardComponent>

        </SocialProof>
        <ProjectSection projectContent={pageContent.ProjectSection} />
        <CtaSectionWithBgImage  ctaContent={pageContent.secondCta}/>
        <Gallery />
        <ContactSection urls={pageContent.contactSection} />
      </main>
    </>
  )
}

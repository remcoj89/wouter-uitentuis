// Styles
import styles from "./page.module.css";
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



export default function Home() {

  const pageContent = {
    heroSection:
        {
        heroTitle: "Milieuvriendelijk Onderhoud voor Gezonde Velden",
        subTitle: "Behoud van Gezonde Grasvelden bij Intensief Gebruik",
        backGroundImage: "/assets/images/field-management/green-grass-white-clouds.png",
        image1: {imageUrl: "/assets/images/field-management/hero_image-1.png", altText: "image 1"},
        image2: {imageUrl: "/assets/images/field-management/hero_image-2.png", altText: "image 1"},
        image3: {imageUrl: "/assets/images/field-management/hero_image-3.png", altText: "image 1"}
      },
      uspSection: [
        {
          title: "Schadedetectie en herstel",
          description: "Inspecteren en repareren van beschadigingen houdt het veld in optimale conditie. Snelle interventie voorkomt verdere schade.",
          iconUrl: "/assets/images/field-management/icon-grass.svg"
        },
        {
          title: "Beregening",
          description: "Een goed beheerd irrigatiesysteem zorgt ervoor dat het gras voldoende water krijgt, vooral tijdens droge periodes. Dit voorkomt uitdroging en behoudt de vitaliteit van het veld.",
          iconUrl: "/assets/images/field-management/icon-water.svg"
        },
        {
          title: "Bemesten",
          description: "Het toedienen van meststoffen voorziet het gras van essentiële voedingsstoffen. Dit versterkt de wortels en houdt het gras gezond en groen.",
          iconUrl: "/assets/images/field-management/icon-seed.svg"
        },
      ],
      ctaSection: {
        ctaTitle: "Samen voor Perfecte Speelvelden!",
        ctaSubtitle: "Wilt u weten hoe wij het beheer van uw velden kunnen optimaliseren? Ontdek de voordelen en laat ons uw velden perfectioneren.",
        imageUrl: "/assets/images/field-management/hero_image-2.png",
        altText: "Foto van een vers gemaaid voetbal veld"
      },
      socialProofSection: [
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
      ],
      ProjectSection: [
        {
          projectTitle: "'Gras is geen rocketscience. Laat je niet gek maken'",
          projectDescription: {
            paragraph1: "In het eerste jaar dat de trainingsvelden werden opgeleverd, nu vijf jaar geleden, kon nog niemand bevroeden hoe slecht het gras zou groeien. Er ontstonden veel kale grasplekken, vooral bij de overlap van de sproeiers.",
            paragraph2: "Na het eerste seizoen is met een fieldtopmaker 2 cm van de graslaag af gefreesd, opnieuw ingezaaid en bemest. Door de warme en droge zomer in het jaar erop, verbrandde het opkomende gras direct.",
            paragraph3: "We hebben ons toen afgevraagd wat daar de oorzaak van was en zijn gaan zoeken. We kwamen erachter dat het met het zoute gietwater had te maken. Met deze kennis zijn we de velden veel meer gaan besproeien om het zout weg te duwen. Soms wel 40 tot 50 ml/m2 per nacht. Normaal geven we afhankelijk van de tijd in het jaar tussen de 10 en 15 ml/m2.",
          },
          projectImage: {
            imageUrl: "/assets/images/field-management/trainings-veld-van-az.webp",
            altText: "Trainings veld van AZ"
          }
        },
        {
          projectTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis ipsum ullam.",
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
          projectTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis ipsum ullam.",
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
        ctaTitle: "Uw Velden, Onze Zorg!",
        ctaSubtitle: "Wilt u weten wat wij voor het onderhoud van uw voetbalvelden kunnen betekenen? Laten we samenwerken aan perfect speeloppervlak!",
        imageUrl: "/assets/images/field-management/hero_image-1.png",
        altText: "Foto van een vers gemaaid voetbal veld"
      },
      contactSection: {
        imageUrl: "/assets/images/gardener/handschoenen.avif"
      }
     }

  return (
    <>
       <HeroSection sectionContent={pageContent.heroSection} />

      <main className={styles.main}>
        <UspSection bennefits={pageContent.uspSection} />
        <CtaSection ctaContent={pageContent.ctaSection} />
        <SocialProof >
          {pageContent.socialProofSection.map((logo, i) => {
            <ProjectSection />
            return (
              <CardComponent cardStyle='logoCard' key={i}>
              <Image src={logo.imageUrl} alt={logo.altText} height={200} width={200}/>
            </CardComponent>
            )
          })}
        </SocialProof>
        <ProjectSection projectContent={pageContent.ProjectSection} />
        <CtaSectionWithBgImage  ctaContent={pageContent.secondCta}/>
        <Gallery />
        <ContactSection urls={pageContent.contactSection}/>
      </main>
    </>
  );
}

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
        ctaTitle: "Benieuw wat wij voor uw club kunnen betekenen?",
        ctaSubtitle: "Neem dan vrijblijvend contact met ons op",
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
        <CtaSectionWithBgImage />
        <Gallery />
        <ContactSection />
      </main>
    </>
  );
}

// Styles
import Styles from "../page.module.css";


// Components
import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import UspSection from "@/ui/sections/usp-section/usp-section.component";
import CtaSection from "@/ui/sections/cta-section/cta-section.component";
import SocialProof from "@/ui/sections/social-proof-section/social-proof.component";
import HorizontalLogoSlider from "@/ui/components/horizontal-logo-slider/horizontal-logo-slider.component";
import ProjectSection from '@/ui/sections/project-section/project-section.component';
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component';
import Gallery from '@/ui/sections/gallery-section/gallery.component';
import ContactSection from '@/ui/sections/contact-section/contact-section.component';


export default function BigGreen() {  


  const pageContent = {
    heroSection:
        {
        heroTitle: "Breng Leven In Je Groene Omgeving",
        subTitle: "Deskundige Zorg Voor Een Groene En Gezonde Omgeving",
        backGroundImage: "/assets/images/big-green/hero/hero-big-green.png",
        image1: {imageUrl: "/assets/images/big-green/hero/darwin-park.jpg", altText: "image 1"},
        image2: {imageUrl: "/assets/images/big-green/hero/veldpark-luchtfoto.jpg", altText: "image 1"},
        image3: {imageUrl: "/assets/images/big-green/hero/wouter-uitentuis-groot-groen-hero-1.jpg", altText: "image 1"}
      },
      uspSection: [
        {
          title: "Kostenbesparend beheer",
          description: "Door efficiënte planning en uitvoering van onderhoudstaken worden lange termijn kosten verlaagd en grote herstelwerkzaamheden voorkomen.",
          iconUrl: "/assets/images/big-green/icon-money.svg"
        },
        {
          title: "Verbeterde veiligheid",
          description: "Regelmatig onderhoud voorkomt gevaarlijke situaties, zoals losliggende tegels, overgroeiende struiken en slecht zichtbare verkeersborden.",
          iconUrl: "/assets/images/big-green/icon-safety.svg"
        },
        {
          title: "Duurzaam groenbeheer",
          description: "Gebruik van milieuvriendelijke technieken en inheemse planten draagt bij aan een duurzame buitenruimte en bevordert biodiversiteit.",
          iconUrl: "/assets/images/big-green/icon-sustainability.svg"
        },
      ],
      ctaSection: {
        ctaTitle: "We denken graag me u mee",
        ctaSubtitle: "Ontvang professioneel advies voor uw groenbeheer. Neem vandaag nog contact op voor een gratis gesprek.",
        imageUrl: "/assets/images/big-green/darwin-park.jpg",
        altText: "Foto van een vers gemaaid voetbal veld"
      },
      socialProofSection: [
        {
          imageUrl: "/assets/images/big-green/logos/logo-az.png",
          altText: "Logo Az"
        },
        {
          imageUrl: "/assets/images/big-green/logos/logo-gemeente-zaanstad.jpg",
          altText: "Logo Gemeente Zaanstad"
        },
        {
          imageUrl: "/assets/images/big-green/logos/logo-de-lange-bv.webp",
          altText: "Logo De Lange Bv"
        },
        {
          imageUrl:  "/assets/images/big-green/logos/logo-gemeente-purmerend.jpg",
          altText: "Logo Gemeente Purmerend"
        },
        { imageUrl:  "/assets/images/big-green/logos/logo-gemeente-maassluis.png",
          altText: "Logo Gemeente Maassluis"
        },
        { imageUrl:  "/assets/images/big-green/logos/logo-natuur-monumenten.jpg",
          altText: "Logo Natuur monumenten"
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
        ctaTitle: "Duurzaam en effectief groenbeheer voor elke omgeving.",
        ctaSubtitle: "Kunnen wij u helpen met een duurzame en groene oplossing? Druk op de onderstaande knop om naar de contactpagina te gaan. ",
        imageUrl: "/assets/images/big-green/veldpark-luchtfoto.jpg",
        altText: "Foto van een vers gemaaid voetbal veld"
      },
      contactSection: {
        imageUrl: "/assets/images/shared/team-wouter.jpg"
      }
     }

  return (
    <>
      <HeroSection sectionContent={pageContent.heroSection} />

      <main className={Styles.main}>
        <UspSection bennefits={pageContent.uspSection} />
        <CtaSection ctaContent={pageContent.ctaSection} />
        <SocialProof >
          <HorizontalLogoSlider logos={pageContent.socialProofSection} />
        </SocialProof>
        <ProjectSection projectContent={pageContent.ProjectSection} />
        <CtaSectionWithBgImage  ctaContent={pageContent.secondCta}/>
        <Gallery />
        <ContactSection urls={pageContent.contactSection} />
      </main>
    </>
  )
}

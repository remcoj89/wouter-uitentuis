// Styles
import Styles from "../page.module.css";

// Components
import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import UspSection from "@/ui/sections/usp-section/usp-section.component";
import CtaSection from "@/ui/sections/cta-section/cta-section.component";
import SocialProof from "@/ui/sections/social-proof-section/social-proof.component";
import HorizontalLogoSlider from "@/ui/components/horizontal-logo-slider/horizontal-logo-slider.component";
import ArticleSection from "@/ui/sections/article-section/article-section";
import FeaturedContentSection from "@/ui/sections/featured-content-section/featured-content";
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component';
import Gallery from '@/ui/sections/gallery-section/gallery.component';
import ContactSection from '@/ui/sections/contact-section/contact-section.component';

const pageContent = {
    metaData: {
      title: "Wouter Uitentuis | Groenonderhoud in regio Noord-Holland",
      description: "Als specialist in groenonderhoud ondersteunen wij gemeenten en overheidsinstellingen bij het onderhouden van groen in de openbare ruimte. Daarnaast verzorgen we het onderhoud van zakelijke buitenruimtes, waaronder bedrijventerreinen, binnentuinen en dakterrassen."
    },
    heroSection:
        {
          heroTitle: "Groenonderhoud in regio Noord-Holland",
          subTitle: "Als specialist in groenonderhoud helpen we gemeenten en andere overheidsinstellingen met het onderhouden van groen in de openbare ruimte. Ook verzorgen we het onderhoud van zakelijke buitenruimtes zoals bedrijventerreinen, binnentuinen en dakterrassen.",
          backGroundImage: "/assets/images/big-green/hero/hero-big-green.png",
    },
    uspSection: [
      {
        title: "Snoeien en trimmen",
        description: "We snoeien en trimmen planten en struiken zodat deze een goede gezondheid behouden. Ook bevordert het de groei, voorkomt het overwoekering en zorgt het voor een nette buitenruimte.",
        iconUrl: "/assets/images/big-green/icon-money.svg"
      },
      {
        title: "Seizoensgebonden onderhoud",
        description: "We bereiden de buitenruimte voor op een nieuw seizoen. We maken de omgeving bladvrij, verwijderen onkruid en herstellen eventuele schade.",
        iconUrl: "/assets/images/big-green/icon-safety.svg"
      },
      {
        title: "Duurzaam groenbeheer",
        description: "Door middel van goed groenonderhoud brengen we de buitenomgeving tot leven.",
        iconUrl: "/assets/images/big-green/icon-sustainability.svg"
      },
    ],
    ctaSection: {
      ctaTitle: "Duurzaam groenbeheer: onze specialiteit",
      ctaSubtitle: "Ontvang professioneel advies voor jouw groenbeheer. Neem vandaag nog contact op voor een gratis gesprek.",
      imageUrl: "/assets/images/big-green/darwin-park.jpg",
      altText: "Foto van het darwin-park"
    },
    socialProofTitle: "Wij verzorgen het groenonderhoud voor onder andere",
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
    articleSection:
    {
      articleQuote: "Goed groenonderhoud zorgt voor een levendige omgeving",
      articleDescription: {
        paragraph1: "Breng de buitenomgeving tot leven door deze goed te onderhouden. Een juist ingerichte en mooi onderhouden buitenruimte draagt bij aan een gezonde, groene leefomgeving en nodigt uit tot gebruik.",
        title1:"Groenonderhoud voor overheidsorganisaties",
        paragraph2: "Om een fijne leefomgeving te creëren en behouden is regelmatig groenonderhoud essentieel. In de openbare ruimte verzorgen we onder meer trim- en snoeiwerk, het aanplanten van nieuw groen, het verwijderen van bladeren en onkruid en het onderhoud van waterpompen. Dit doen we op basis van een vooraf opgesteld werkplan of incidenteel.",
        title2:"Onderhoud van de zakelijke buitenomgeving",
        paragraph3: "Een doordacht ingerichte en mooi onderhouden buitenruimte is belangrijk om een fijne werkomgeving te creëren. We nemen het volledige onderhoud van de zakelijke buitenruimte uit handen. Van parkeerterrein tot binnentuin en dakterras.",
        title3:"Kostenbesparend beheer",
        paragraph4: "Door efficiënte planning en uitvoering van onderhoudstaken worden lange termijnkosten verlaagd en grote herstelwerkzaamheden voorkomen. Ook voorkomt het onveilige situaties die veroorzaakt kunnen worden door bijvoorbeeld losliggende tegels en overwoekerde bewegwijzering."
      },
      articleImage1: {
        imageUrl: "/assets/images/field-management/articles/beleinen.jpg",
        altText: "Belijnen met een lijn robot"
      },
        articleImage2: {
        imageUrl: "/assets/images/field-management/articles/beleinen.jpg",
        altText: "Belijnen met een lijn robot"
      },
      link: {
        url: "/hovenier",
        linkText: "Naast groenonderhoud voor grotere instanties, verzorgen we particulier en kleinzakelijk tuinonderhoud."
      }
    },
    featuredContentSection: {
      title: "Herstelwerkzaamheden na natuurgeweld",
      paragraph: "De natuur hebben we niet onder controle. Het komt dan ook voor dat na flink natuurgeweld, zoals een storm of overstroming, schade ontstaat. In dit soort noodsituaties staan wij klaar om ad hoc herstelwerkzaamheden te verrichten."
    },
    secondCta: {
      ctaTitle: "Duurzaam groenbeheer voor elke omgeving",
      ctaSubtitle: "Meer weten over groenonderhoud in de openbare ruimte of zakelijke buitenruimte? Laat het ons weten.",
      imageUrl: "/assets/images/big-green/projects/wouter-uitentuis-grootgroen-project-2.jpg",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    contactSection: {
      imageUrl: "/assets/images/shared/team-wouter.jpg"
    },
    gallerySection: [
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-1.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-2.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-3.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-4.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-5.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-6.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-7.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-8.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-9.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-10.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-11.jpg',
        imageTitle: "titel",
        altText: "image description"
      },
      {
        imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-12.jpg',
        imageTitle: "titel",
        altText: "image description"
      }
    ]
   }


export const metadata = {
  title: `${pageContent.metaData.title}`,
  description:`${pageContent.metaData.description}`,
  openGraph: {
    title: `${pageContent.metaData.title}`,
    description:`${pageContent.metaData.description}`,
 },
}

export default function Groenonderhoud() {

  return (
    <>
      <HeroSection sectionContent={pageContent.heroSection} />

      <main className={Styles.main}>
        <UspSection bennefits={pageContent.uspSection} />
        <CtaSection ctaContent={pageContent.ctaSection} />
        <SocialProof socialProofTitle={pageContent.socialProofTitle}>
          <HorizontalLogoSlider logos={pageContent.socialProofSection} />
        </SocialProof>
        <ArticleSection articleContent={pageContent.articleSection}/>
        <FeaturedContentSection featuredContent={pageContent.featuredContentSection} />
        <CtaSectionWithBgImage  ctaContent={pageContent.secondCta}/>
        <Gallery images={pageContent.gallerySection}/>
        <ContactSection urls={pageContent.contactSection} />
      </main>
    </>
  )
}

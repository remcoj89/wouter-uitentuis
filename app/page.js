// Styles
import styles from "./page.module.css";

// Google Analytics
import { GoogleAnalytics } from '@next/third-parties/google'
// Components
import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import UspSection from "@/ui/sections/usp-section/usp-section.component";
import CtaSection from "@/ui/sections/cta-section/cta-section.component";
import ArticleSection from "@/ui/sections/article-section/article-section";
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component';
import Gallery from '@/ui/sections/gallery-section/gallery.component';
import ContactSection from '@/ui/sections/contact-section/contact-section.component';
import HorizontalLogoSlider from "@/ui/components/horizontal-logo-slider/horizontal-logo-slider.component";
import FeaturedContentSection from "@/ui/sections/featured-content-section/featured-content";
import SocialProof from "@/ui/sections/social-proof-section/social-proof.component";


const pageContent = {
    metaData: {
      title: 'Wouter Uitentuis | De expert in onderhoud en beheer van sportvelden voor amateur- en profclubs.',
      description:"Met advies en de juiste onderhoudsmaatregelen helpen we sportclubs hun grasvelden in optimale staat te brengen en houden, ook bij intensief gebruik."
    },
    heroSection:
      {
      heroTitle: "Dé expert in onderhoud en beheer van sportvelden voor amateur- en profclubs",
      subTitle: "Met advies en de juiste onderhoudsmaatregelen helpen we sportclubs hun grasvelden in optimale staat te brengen en houden, ook bij intensief gebruik.",
      backGroundImage: "/assets/images/field-management/green-grass-white-clouds.webp",
    },
    uspSection: [
      {
        title: "Onderhoud",
        description: "Door middel van o.a. maaien, bemesten, bezanden en verticuteren houden we het veld in optimale conditie.",
        iconUrl: "/assets/images/field-management/icon-seed.svg"
      },
      {
        title: "Belijning",
        description: "We verzorgen de belijning van diverse soorten sportvelden. Dit doen we snel en nauwkeurig met gebruik van gps.",
        iconUrl: "/assets/images/field-management/icon-belijning.svg"
      },
      {
        title: "Begeleiding & Advies",
        description: "We begeleiden en adviseren sportclubs die het onderhoud van hun velden in eigen beheer hebben.",
        iconUrl: "/assets/images/field-management/icon-knowledge.svg"
      },
    ],
    ctaSection: {
      ctaTitle: "Jouw sportveld, onze zorg",
      ctaSubtitle: "Gezonde grasvelden die lang bespeelbaar zijn. Samen krijgen we het voor elkaar.",
      imageUrl: "/assets/images/field-management/field-management-hero-1.webp",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    socialProofTitle: "Wij beheren de velden van onder andere",
    socialProofSection: [
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-ado-den-haag.svg",
      //   altText: "logo Ado Den Haag"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-aek-athene.svg",
      //   altText: "logo AEK Athene"
      // },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-alkmaarsche-boys.png",
        altText: "logo Alkmaarsche Boys"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-az.svg",
        altText: "logo Az Alkmaar"
      },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-bologna.svg",
      //   altText: "logo Bologna"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-engelse-bond.svg",
      //   altText: "logo Engelse nationale ploeg"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-fc-groningen.svg",
      //   altText: "logo Fc Groningen"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-fc-utrecht.png",
      //   altText: "logo Fc Utrecht"
      // },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-hercules-zaandam.png",
        altText: "logo Hercules Zaandam"
      },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-kaa-gent.svg",
      //   altText: "logo Kaa Gent"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-knvb.svg",
      //   altText: "logo KNVB"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-lamia-fc.png",
      //   altText: "logo Lamia FC"
      // },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-shakhter-donetsk.svg",
      //   altText: "logo Shakhter Donetks"
      // },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-sporting-s.png",
        altText: "logo sporting-s"
      },
      // {
      //   imageUrl: "/assets/images/field-management/club-logos/logo-voetbal-bond-peru.png",
      //   altText: "logo Nationaal Voetbalteam Peru"
      // },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-vv-bergen.png",
        altText: "logo VV Bergen"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-zcfc.png",
        altText: "logo ZcFc"
      },
    ],
    articleSection:
      {
        articleQuote: "Gras is geen rocket science",
        articleDescription: {
          paragraph1: "Het gras wil niet groeien, er is sprake van slechte beworteling of er zijn problemen met de water- en luchthuishouding. Er is altijd iets aan te doen. Gras is namelijk geen rocket science. Met 12 jaar ervaring in sportveldonderhoud weten we wat er nodig is om jouw sportveld in optimale conditie te houden.",
          title1:"Sportveldbeheer voor ieder budget",
          paragraph2: "We verzorgen het speelveldonderhoud voor zowel amateur- als profclubs binnen diverse sporten. In samenwerking met PR Sport verzorgen we het veldonderhoud tijdens trainingskampen van diverse internationale voetbalclubs. Van het speelveld van de lokale sportvereniging tot de wedstrijdvelden van clubs in de Eredivisie: we halen het maximale uit elk budget.",
          title2:"Bespeelbaarheid van het veld verhogen",
          paragraph3: "Met goed onderhoud verleng je de periode dat een veld bespeelbaar is. Tijdig maaien, doorzaaien, beluchten en speelschadeherstel spelen hierbij een belangrijke rol. We streven ernaar al onze onderhoudswerkzaamheden zonder gebruik van chemische middelen uit te voeren.",
          title3:"Altijd een bekend gezicht",
          paragraph4: "Ons team is klein en hecht. We checken regelmatig in bij onze clubs en zorgen dat zij altijd een bekend gezicht op de grasmat hebben staan. We kennen onze clubs en hun velden en zetten al onze kennis in voor optimaal behoud. En komen we er zelf niet uit? Dan schakelen we ons netwerk van externe experts in. Alleen zo bereiken we samen het beste resultaat."
        },
        articleImage1: {
          imageUrl: "/assets/images/field-management/articles/wouter-uitentuis-stadion-az.webp",
          altText: "Veld van stadion Az vanaf de tribune"
        },
          articleImage2: {
          imageUrl: "/assets/images/field-management/articles/beleinen.webp",
          altText: "Belijnen met een lijn robot"
        }
      },
    featuredContentSection: {
      title: "Gps-robotbelijning:",
      subTitle: "nauwkeurig en kostenefficiënt",
      paragraph: "Voor het belijnen van sportvelden maken we gebruik van onze gps-robotbelijner. Deze stelt ons in staat sportvelden snel en heel precies te belijnen."
    },
    secondCta: {
      ctaTitle: "Een gezonde grasmat voor ieder budget",
      ctaSubtitle: "Jouw speelveld in optimale conditie brengen en houden? Met de kennis van ons ervaren team is het zo voor elkaar!t u weten wat wij voor het onderhoud van uw voetbalvelden kunnen betekenen? Laten we samenwerken aan perfect speeloppervlak!",
      imageUrl: "/assets/images/field-management/green-grass-white-clouds.webp",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    contactSection: {
      imageUrl: "/assets/images/shared/team-wouter.jpg"
    },
    gallerySection: [
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-1.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-2.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-3.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-4.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-5.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-6.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-7.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-8.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-9.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-10.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-11.webp',
          imageTitle: "titel",
          altText: "image description"
        },
        {
          imgUrl:'/assets/images/field-management/images/wouter-uitentuis-fieldmanager-12.webp',
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





export default function Home() {

  return (
    <>
       <GoogleAnalytics gaId="G-QN7N1KL6LP" />
       <HeroSection sectionContent={pageContent.heroSection} />

      <main className={styles.main}>
        <UspSection bennefits={pageContent.uspSection} />
        <CtaSection ctaContent={pageContent.ctaSection} />
        <SocialProof socialProofTitle={pageContent.socialProofTitle}>
          <HorizontalLogoSlider logos={pageContent.socialProofSection} />
        </SocialProof>
        <ArticleSection articleContent={pageContent.articleSection}/>
        <FeaturedContentSection featuredContent={pageContent.featuredContentSection} />
        <CtaSectionWithBgImage  ctaContent={pageContent.secondCta}/>
        <Gallery images={pageContent.gallerySection} />
        <ContactSection urls={pageContent.contactSection}/>
      </main>
    </>
  );
}

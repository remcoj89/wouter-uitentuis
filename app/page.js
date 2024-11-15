// Styles
import styles from "./page.module.css";


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
  heroSection:
      {
      heroTitle: "Al meer dan 12 jaar zijn we dé expert in onderhoud en beheer van sportvelden voor amateur- en profclubs.",
      subTitle: "Met advies en de juiste onderhoudsmaatregelen helpen we sportclubs hun grasvelden in optimale staat te brengen en houden, ook bij intensief gebruik.",
      backGroundImage: "/assets/images/field-management/green-grass-white-clouds.png",
      image1: {imageUrl: "/assets/images/field-management/field-management-hero-1.jpg", altText: "image 1"},
      image2: {imageUrl: "/assets/images/field-management/hero_image-2.png", altText: "image 1"},
      image3: {imageUrl: "/assets/images/field-management/hero_image-3.png", altText: "image 1"}
    },
    uspSection: [
      {
        title: "Onderhoud",
        description: "Door middel van o.a. maaien, bemesten, bezanden en verticuteren houden we het veld in optimale conditie.",
        iconUrl: "/assets/images/field-management/icon-grass.svg"
      },
      {
        title: "Belijning",
        description: "We verzorgen de belijning van diverse soorten sportvelden. Dit doen we snel en nauwkeurig met gebruik van gps.",
        iconUrl: "/assets/images/field-management/icon-water.svg"
      },
      {
        title: "Begeleiding & Advies",
        description: "We begeleiden en adviseren sportclubs die het onderhoud van hun velden in eigen beheer hebben.",
        iconUrl: "/assets/images/field-management/icon-seed.svg"
      },
    ],
    ctaSection: {
      ctaTitle: "Jouw sportveld, onze zorg",
      ctaSubtitle: "Gezonde grasvelden die lang bespeelbaar zijn. Samen krijgen we het voor elkaar.",
      imageUrl: "/assets/images/field-management/field-management-hero-1.jpg",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    socialProofTitle: "Wij beheren de velden van onder andere",
    socialProofSection: [
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-ado-den-haag.png",
        altText: "logo Ado Den Haag"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-aek-athene.png",
        altText: "logo AEK Athene"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-alkmaarsche-boys.png",
        altText: "logo Alkmaarsche Boys"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-az.png",
        altText: "logo Az Alkmaar"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-bologna.png",
        altText: "logo Bologna"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-engelse-bond.png",
        altText: "logo Engelse nationale ploeg"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-fc-groningen.png",
        altText: "logo Fc Groningen"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-fc-utrecht.png",
        altText: "logo Fc Utrecht"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-hercules-zaandam.png",
        altText: "logo Hercules Zaandam"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-kaa-gent.png",
        altText: "logo Kaa Gent"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-knvb.png",
        altText: "logo KNVB"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-lamia-fc.png",
        altText: "logo Lamia FC"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-shaktar-donetsk.png",
        altText: "logo Shaktar Donetks"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-sporting-s.png",
        altText: "logo sporting-s"
      },
      {
        imageUrl: "/assets/images/field-management/club-logos/logo-voetbal-bond-peru.png",
        altText: "logo Nationaal Voetbalteam Peru"
      },
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
        articleQuote: "Gras is geen rocketscience",
        articleDescription: {
          paragraph1: "Het gras wil niet groeien, er is sprake van slechte beworteling of er zijn problemen met de water- en luchthuishouding. Er is altijd iets aan te doen. Gras is namelijk geen rocket science. Met 12 jaar ervaring in sportveldonderhoud weten we wat er nodig is om jouw sportveld in optimale conditie te houden.",
          title1:"Sportveldbeheer voor ieder budget",
          paragraph2: "We verzorgen het speelveld onderhoud voor zowel amateur- als profclubs binnen diverse sporten. In samenwerking met PR Sport verzorgen we het veldonderhoud tijdens trainingskampen van diverse internationale voetbalclubs. Van het speelveld van de lokale sportvereniging tot de wedstrijdvelden van clubs in de Eredivisie: we halen het maximale uit elk budget.",
          title2:"Bespeelbaarheid van het veld verhogen",
          paragraph3: "Met goed onderhoud verleng je de periode dat een veld bespeelbaar is. Tijdig maaien, doorzaaien, beluchten en speelschadeherstel spelen hierbij een belangrijke rol. We streven ernaar al onze onderhoudswerkzaamheden zonder gebruik van chemische middelen uit te voeren",
          title3:"Altijd een bekend gezicht",
          paragraph4: "Ons team is klein en hecht. We checken regelmatig in bij onze clubs en zorgen dat zij altijd een bekend gezicht op de grasmat hebben staan. We kennen onze clubs en hun velden en zetten al onze kennis in voor optimaal behoud. En komen we er zelf niet uit? Dan schakelen we ons netwerk van externe experts in. Alleen zo bereiken we samen het beste resultaat."
        },
        articleImage1: {
          imageUrl: "/assets/images/field-management/articles/beleinen.jpg",
          altText: "Belijnen met een lijn robot"
        },
          articleImage2: {
          imageUrl: "/assets/images/field-management/articles/beleinen.jpg",
          altText: "Belijnen met een lijn robot"
        }
      },
    featuredContentSection: {
      title: "Gps-robotbelijning: nauwkeurig en kostenefficiënt",
      paragraph: "Voor het belijnen van sportvelden maken we gebruik van onze gps-robotbelijner. Deze stelt ons in staat sportvelden snel en heel precies te belijnen."
    },
    secondCta: {
      ctaTitle: "Uw Velden, Onze Zorg!",
      ctaSubtitle: "Wilt u weten wat wij voor het onderhoud van uw voetbalvelden kunnen betekenen? Laten we samenwerken aan perfect speeloppervlak!",
      imageUrl: "/assets/images/field-management/hero_image-1.png",
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
  title: 'Wouter Uitentuis | De expert in onderhoud en beheer van sportvelden voor amateur- en profclubs.',
  description:"Met advies en de juiste onderhoudsmaatregelen helpen we sportclubs hun grasvelden in optimale staat te brengen en houden, ook bij intensief gebruik.",
  openGraph: {
    title: 'Wouter Uitentuis | De expert in onderhoud en beheer van sportvelden voor amateur- en profclubs.',
    description:"Met advies en de juiste onderhoudsmaatregelen helpen we sportclubs hun grasvelden in optimale staat te brengen en houden, ook bij intensief gebruik.",
  },
}


export default function Home() {


  return (
    <>
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
        <Gallery />
        <ContactSection urls={pageContent.contactSection}/>
      </main>
    </>
  );
}

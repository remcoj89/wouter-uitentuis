// Styles
import Styles from '../page.module.css'

// Components
import UspSection from '@/ui/sections/usp-section/usp-section.component'
import HeroSection from "@/ui/sections/hero-section/hero-section.component"
import SocialProof from '@/ui/sections/social-proof-section/social-proof.component'
import ArticleSection from "@/ui/sections/article-section/article-section";
import CtaSectionWithBgImage from '@/ui/sections/cta-section-with-bg-image/cta-section-with-bg-image.component'
import Gallery from '@/ui/sections/gallery-section/gallery.component'
import ContactSection from '@/ui/sections/contact-section/contact-section.component'
import CtaSection from '@/ui/sections/cta-section/cta-section.component'
import CardComponent from '@/ui/components/card/card.component'
import FeaturedContentSection from "@/ui/sections/featured-content-section/featured-content";

const pageContent = {
    metaData: {
      title: 'Wouter Uitentuis | Hovenier in omgeving Alkmaar',
      description:"Als hovenier helpen we particulieren en de kleinere ondernemer in regio Noord-Holland met tuinaanleg en -onderhoud. Van snoeien en bestraten tot seizoensgebonden onderhoud en houtwerk."
    },
  heroSection:
      {
      heroTitle: "Jouw hovenier in Noord-Holland",
      subTitle: "Als hovenier helpen we particulieren en de kleinere ondernemer in regio Noord-Holland met tuinaanleg en -onderhoud. Van snoeien en bestraten tot seizoensgebonden onderhoud en houtwerk.",
      backGroundImage: "/assets/images/gardener/hovenier-hero-1.jpg",
    },
    uspSection: [
      {
        title: "Tuinaanleg & -renovatie",
        description: "We verzorgen de volledige aanleg en renovatie van tuinen, inclusief bestrating en aanplanting, met als doel een aantrekkelijke en gebruiksvriendelijk tuin.",
        iconUrl: "/assets/images/gardener/garden-icon-flower.svg"
      },
      {
        title: "Tuinonderhoud",
        description: "Passend onderhoud voor ieder seizoen. Dankzij goed onderhoud op het juiste moment geniet je het hele jaar van een tuin die er mooi bij staat.",
        iconUrl: "/assets/images/gardener/garden-icon-shovel.svg"
      },
      {
        title: "Gazon",
        description: "Wij zijn specialist op het gebied van gazonaanleg en -onderhoud. Door middel van o.a. bemesten, beluchten en verticuteren zorgen we voor een gezond gazon jaarrond.",
        iconUrl: "/assets/images/gardener/garden-icon-garden-cart.svg"
      },
    ],
    ctaSection: {
      ctaTitle: "In elk seizoen een mooie tuin",
      ctaSubtitle: "Een prachtig onderhouden en gebruiksvriendelijke tuin. Wij regelen het voor je.",
      imageUrl: "/assets/images/gardener/achtertuin-met-vijver.jpg",
      altText: "Foto van een vers gemaaid voetbal veld"
    },
    socialProofSection: {
      title: "W. Uitentuis – Hovenier Noord-Holland",
      startYear: 2013,
      numberOfGardens: 132,
      grasPlanted: 6600,
    },
    articleSection:
    {
      articleQuote: "Met elk budget is een mooie tuin te realiseren",
      articleDescription: {
        paragraph1: "Achterstallig onderhoud aan houtwerk, een terras vol scheve tegels of een herfsttuin met weinig kleur. Ons team gaat er graag mee aan de slag. We helpen je met het realiseren van een prachtig groen gazon, een kleurrijke border, een strak terras of een gloednieuwe overkapping.",
        title1:"Elk seizoen een fijne tuin",
        paragraph2: "Door een goede inrichting en beplanting van de tuin, is deze geschikt voor ieder seizoen. We denken graag mee over een beplantingsplan zodat jouw tuin zowel in de lente en zomer als in de koude en natte maanden een fijne plek is. We zorgen voor planten die de winter kleur geven en beplanting die het vele water van het herfstseizoen opneemt en vasthoudt. Zo is jouw tuin direct toekomstbestendig.",
        title2:"Met elk budget een mooie tuin",
        paragraph3: "Ook met een klein budget kunnen we een prachtige buitenomgeving realiseren. Dat weten we uit ervaring. De uitdaging die dit met zich meebrengt maak de klus alleen maar mooier. Samen kijken we wat er mogelijk is en halen we het maximale uit jouw tuin.",
        title3:"Persoonlijke benadering",
        paragraph4: "‘Afspraak is afspraak’ is het motto binnen ons kleine team. We geloven in persoonlijk contact en zorgen dat je zoveel mogelijk dezelfde gezichten ziet. Zo leren we jou als klant goed kennen en zijn we in staat jouw ideale tuin te creëren."
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
        url: "/groen-onderhoud",
        linkText: "Naast particulier en kleinzakelijk tuinonderhoud verzorgen we groenonderhoud voor gemeentes, overheidsinstellingen en bedrijven."
      }
    },
    featuredContentSection: {
      title: "Houtwerk op maat",
      paragraph: "Voor onze klanten creëren we diverse houtwerkconstructies. In eigen beheer bouwen we onder meer tuinhuizen, veranda’s, pergola’s en overkappingen. Dit doen we volledig op maat, zodat de houtwerkconstructie perfect in jouw buitenomgeving past."
    },
    secondCta: {
      ctaTitle: "Heerlijk buitenleven in elk seizoen",
      ctaSubtitle: "Toe aan vernieuwing in de tuin? Laten we samen kijken naar de mogelijkheden.",
      imageUrl: "/assets/images/gardener/voortuin.jpg",
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

export default function Hovenier() {



  return (
    <>
      <HeroSection sectionContent={pageContent.heroSection} />

      <main className={Styles.main}>
        <UspSection bennefits={pageContent.uspSection} />
        <CtaSection ctaContent={pageContent.ctaSection} />
        <SocialProof socialProofTitle={pageContent.socialProofSection.title}>

          <CardComponent cardStyle='socialProofCard' >
              <h3 className='counter'>11</h3>
              <span>jaar actief als hovenier</span>
          </CardComponent>
          <CardComponent cardStyle='socialProofCard' >
            <h3>&gt; 132</h3>
            <span>tuinen aangelegd</span>
          </CardComponent>
          <CardComponent cardStyle='socialProofCard' >
            <h3>&gt; 66000km2</h3>
            <span>gras gezaaid</span>
          </CardComponent>

        </SocialProof>
        <ArticleSection articleContent={pageContent.articleSection}/>
        <FeaturedContentSection featuredContent={pageContent.featuredContentSection} />
        <CtaSectionWithBgImage  ctaContent={pageContent.secondCta}/>
        <Gallery images={pageContent.gallerySection} />
        <ContactSection urls={pageContent.contactSection} />
      </main>
    </>
  )
}

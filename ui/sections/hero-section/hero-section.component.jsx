'use client'
// Styles
import Styles from './hero-section.module.css';

// Hooks
import Image from 'next/image';

// Components
import Button from '@/ui/components/button/button.component';
import { ArrowDownLarge, ArrowDownSmall } from '@/assets/icons';

const HeroSection = () => {

  const backgroundImage = '/assets/images/field-management/green-grass-white-clouds.png';
  const heroTitle = "Wij Creeren groene meesterwerken";
  const heroSubtitle = "Ontdek onze toonaangeven hoveniers kunst"
  const image1 = {imageUrl: "/assets/images/field-management/hero_image-1.png", altText: "image 1"}
  const image2 = {imageUrl: "/assets/images/field-management/hero_image-2.png", altText: "image 1"}
  const image3 = {imageUrl: "/assets/images/field-management/hero_image-3.png", altText: "image 1"}

    const handleClick = () => {
        document.getElementById("usp-section").scrollIntoView()
        console.log("click")
    }

  return (
    <section id="hero-section"
      className={Styles.heroSection}
      style={{background: `url(${backgroundImage})`, backgroundSize: "cover"}}
      >
      <div className={`wrapper ${Styles.heroWrapper} `}>
         <div className={Styles.heroContent}>
            <h1 className={Styles.heroContentTitle}>{heroTitle}</h1>
            <h2 className={Styles.heroContentSubtitle}>{heroSubtitle}</h2>
            <Button buttonStyle="btnPrimary">Klik voor een vrijblijvende afpraak</Button>
         </div>
         <div className={Styles.heroImageGrid}>

            <Image
              className={`${Styles.image} ${Styles.image1}`}
              src={image1.imageUrl}
              width={500}
              height={500}
              alt={image1.altText}
              />
            <Image
              className={`${Styles.image} ${Styles.image2}`}
              src={image2.imageUrl}
              width={500}
              height={500}
              alt={image2.altText}
              />
            <Image
              className={`${Styles.image} ${Styles.image3}`}
              src={image3.imageUrl}
              width={500}
              height={500}
              alt={image3.altText}
              />
         </div>

      </div>

      <div className={Styles.scrollDownBtn}>
        <div
          className={Styles.arrows}
          onClick={handleClick}>
          <ArrowDownSmall color="#00A651" />
          <ArrowDownLarge color="#5EBF9C" />
        </div>

      </div>

    </section>
  )
}

export default HeroSection

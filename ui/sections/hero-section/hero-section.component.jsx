'use client'
// Styles
import Styles from './hero-section.module.css';

// Hooks
import Image from 'next/image';
import Link from 'next/link';

// Components
import Button from '@/ui/components/button/button.component';
import { ArrowDownLarge, ArrowDownSmall } from '@/assets/icons';

const HeroSection = ({sectionContent}) => {
  const {heroTitle, subTitle,backGroundImage, image1, image2, image3} = sectionContent;

    const handleClick = () => {
        document.getElementById("usp-section").scrollIntoView()
    }

  return (
    <section id="hero-section"
      className={Styles.heroSection}
      style={{background: `url(${backGroundImage})`, backgroundSize: "cover"}}
      >
      <div className={`wrapper ${Styles.heroWrapper} `}>

         <div className={Styles.heroContent}>
            <h1 className={Styles.heroContentTitle}>{heroTitle}</h1>
            <h2 className={Styles.heroContentSubtitle}>{subTitle}</h2>
            <Link href="#contact-section">
              <Button buttonStyle="btnPrimary">Klik voor een vrijblijvende afpraak</Button>
            </Link>
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

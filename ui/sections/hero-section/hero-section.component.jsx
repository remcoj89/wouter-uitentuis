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
  const {heroTitle, subTitle,backGroundImage} = sectionContent;

    const handleClick = () => {
        document.getElementById("usp-section").scrollIntoView()
    }

  return (
    <section id="hero-section"
      className={Styles.heroSection}
      style={{background: `url(${backGroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
      >
      <div className={`wrapper ${Styles.heroWrapper} `}>

          <div className={Styles.heroContent}>
            <h1 className={Styles.heroContentTitle}>{heroTitle}</h1>
            <p className={Styles.heroContentSubtitle}>{subTitle}</p>
          </div>
            <Link href="#contact-section">
              <Button buttonStyle="btnHero">Afspraak maken</Button>
            </Link>

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

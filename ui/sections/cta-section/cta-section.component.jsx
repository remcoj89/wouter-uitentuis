// Styling
import CardComponent from '@/ui/components/card/card.component';
import Styles from './cta-section.module.css';

// Hooks
import Image from 'next/image';
import Link from 'next/link';

// Components
import Button from '@/ui/components/button/button.component';
import IconComponent from '@/ui/components/icon/icon.component';
import { PhoneIcon } from '@/assets/icons';

const CtaSection = ({ctaContent}) => {
  const {ctaTitle, ctaSubtitle, imageUrl, altText} = ctaContent


  return (
    <section id="cta-section" className={Styles.ctaSection} >
        <CardComponent cardStyle='ctaCard' >
          <Image className={Styles.ctaImage} src={imageUrl} height={500} width={500} alt={altText} />
          <div className={Styles.ctaText}>
           <h3 className={Styles.ctaTitle}>{ctaTitle}</h3>
           <span className={Styles.ctaSubtitle}>{ctaSubtitle}</span>
          </div>

          <Link href="#contact-section">
            <Button buttonStyle="btnDarkGreen">
              Contact <IconComponent iconStyle='greenIcon'>
                <PhoneIcon color="#ffff" />
              </IconComponent>
            </Button>
          </Link>
        </CardComponent>
    </section>
  )
}

export default CtaSection;

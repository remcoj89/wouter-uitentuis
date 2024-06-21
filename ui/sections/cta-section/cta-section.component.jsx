// Styling
import CardComponent from '@/ui/components/card/card.component';
import Styles from './cta-section.module.css';

// Hooks
import Image from 'next/image';

// Components
import Button from '@/ui/components/button/button.component';
import IconComponent from '@/ui/components/icon/icon.component';
import { PhoneIcon } from '@/assets/icons';

const CtaSection = () => {

  const imageUrl = '/assets/images/field-management/hero_image-2.png'

  return (
    <section id="cta-section" className={Styles.ctaSection} >
        <CardComponent cardStyle='ctaCard' >
          <Image className={Styles.ctaImage} src={imageUrl} height={500} width={500} alt="" />
          <div className={Styles.ctaText}>
           <h3 className={Styles.ctaTitle}>Benieuw wat wij voor uw club kunnen betekenen?</h3>
           <span className={Styles.ctaSubtitle}>Neem dan vrijblijvend contact met ons op</span>
          </div>
          <Button buttonStyle="btnDarkGreen">
            Contact <IconComponent iconStyle='greenIcon'>
              <PhoneIcon color="#ffff" />
            </IconComponent>
          </Button>
        </CardComponent>
    </section>
  )
}

export default CtaSection;

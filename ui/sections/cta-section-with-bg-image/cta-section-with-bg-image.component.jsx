// Styles
import Styles from './cta-section-with-bg-image.module.css';

// Components
import CardComponent from '@/ui/components/card/card.component';
import Button from '@/ui/components/button/button.component';
import {

 PhoneIcon
} from '@/assets/icons';
import IconComponent from '@/ui/components/icon/icon.component';

const CtaSectionWithBgImage = () => {

  return (
    <section id="cta-section-with-bg-img" className={

Styles.ctaSection
}>
      <div className="wrapper">
        <CardComponent cardStyle='ctaCardTextCenter' backgroundImgUrl="/assets/images/field-management/hero_image-1.png">
          <div className={Styles.ctaCardContent}>
            <h3 className={Styles.ctaTitle}>Beniewd wat wij voor uw vereniging kunnen betekenen?</h3>
            <p className={Styles.ctaSubtitle}>Neem dan vrijblijvend contact met ons op</p>
            <Button buttonStyle="btnDarkGreen">
              Contact  <IconComponent iconStyle='greenIcon'>
                          <PhoneIcon color="#ffff" />
                        </IconComponent>
            </Button>
          </div>
        </CardComponent>
      </div>
    </section>
  )
}

export default CtaSectionWithBgImage;

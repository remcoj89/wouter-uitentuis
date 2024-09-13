// Styles
import Styles from './cta-section-with-bg-image.module.css';

// Hooks
import Link from 'next/link';


// Components
import CardComponent from '@/ui/components/card/card.component';
import Button from '@/ui/components/button/button.component';
import {PhoneIcon} from '@/assets/icons';
import IconComponent from '@/ui/components/icon/icon.component';

const CtaSectionWithBgImage = ({ctaContent}) => {
  const {ctaTitle, ctaSubtitle, imageUrl} = ctaContent

  return (
    <section id="cta-section-with-bg-img" className={Styles.ctaSection}>
      <div className="wrapper">
        <CardComponent cardStyle='ctaCardTextCenter' backgroundImgUrl={imageUrl}>
          <div className={Styles.ctaCardContent}>
            <h3 className={Styles.ctaTitle}>{ctaTitle}</h3>
            <p className={Styles.ctaSubtitle}>{ctaSubtitle}</p>

            <Link href="#contact-section">
              <Button buttonStyle="btnDarkGreen">
                Contact  <IconComponent iconStyle='greenIcon'>
                            <PhoneIcon color="#ffff" />
                          </IconComponent>
              </Button>
            </Link>
          </div>
        </CardComponent>
      </div>
    </section>
  )
}

export default CtaSectionWithBgImage;

'use client'
// Styles
import IconComponent from '@/ui/components/icon/icon.component';
import Styles from './footer-section.module.css';

// Hooks
import Link from 'next/link';
import { PhoneIcon, EmailIcon, LocationIcon } from '@/assets/icons';

// Components

const FooterSection = () => {

  const currentYear = new Date().getFullYear();

return (
  <section id={Styles.sectionFooter}>
    <footer className={`wrapper ${Styles.footerWrapper}`}>
      <div className={Styles.footerContactWrapper}>
      <Link href="mailto: info@wouteruitentuis.nl" target='_blank'>
        <IconComponent iconStyle='greenIcon'><EmailIcon color="#ffff"/> </IconComponent> info@wouteruitentuis.nl
       </Link>
      <Link href="https://maps.app.goo.gl/fwxp3YxCLdR9xtrL6" target='_blank' >
        <IconComponent iconStyle='greenIcon' ><LocationIcon color="#ffff"/></IconComponent>
        Westeinde 29, 1636 VB, Schermerhorn
        </Link>
      <Link href="tel: 0630272667" target='_blank'>
        <IconComponent iconStyle='greenIcon'><PhoneIcon color="#ffff"/> </IconComponent>06-30272667
       </Link>
      </div>
      <p> &copy; W. Uitentuis {currentYear} made by <a href="http://westend-digital.nl" target='_blank'>Westend Digital</a> </p>
    </footer>
  </section>
)
}

export default FooterSection;

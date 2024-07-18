'use client'
// Styling
import ContactForm from '@/ui/components/contact-form/contact-form.component';
import Styles from './contact-section.module.css';

// Hooks
import Image from 'next/image';

const ContactSection = ({urls}) => {

  return (
    <section id="contact-section" className={Styles.contactSection}>
      <Image className={Styles.contactSectionImage} src={urls.imageUrl} height={500} width={500} alt="" />
    <div className={`wrapper ${Styles.contactSectionWrapper}`}>
        {/* title and imag */}
        <div className={Styles.contactSectionHeader}>
          <h3 className={Styles.title}>Benieuw wat wij voor uw club <span className={Styles.titleColor}>kunnen betekenen?</span></h3>
        </div>
        {/* Form */}
        <div className={Styles.contactSectionForm}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection;

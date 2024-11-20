'use client'
// Styling
import ContactForm from '@/ui/components/contact-form/contact-form.component';
import Styles from './contact-section.module.css';

// Hooks
import Image from 'next/image';

const ContactSection = ({urls}) => {

  return (
    <section id="contact-section" className={Styles.contactSection}>
      <Image className={Styles.contactSectionImage} src={urls.imageUrl} height={500} width={500} alt="Het Team van Wouter Uitentuis" />
    <div className={`wrapper ${Styles.contactSectionWrapper}`}>
        {/* title and imag */}
        <div className={Styles.contactSectionHeader}>
          <h3 className={Styles.title}>Heb je een vraag, suggestie of ben je benieuwd hoe we jou kunnen helpen? <span className={Styles.titleColor}>We horen het graag!</span></h3>
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

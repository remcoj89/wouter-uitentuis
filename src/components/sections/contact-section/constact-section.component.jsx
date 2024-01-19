import './contact-section.styles.scss';
import FormComponent from '../../contact-form/contact-form.component';
import FaqComponent from '../../faq/faq.component';

const ContactSection = ({faq}) => {
  if(!faq) {
    return;
  }

  return (
    <section className="contact-container">
      <h2 className='contact-title'>Wilt u meer weten?</h2>
      <div className="flex-box">
        <FaqComponent faq={faq} />
        <FormComponent />
      </div>
    </section>
  )
}

export default ContactSection;

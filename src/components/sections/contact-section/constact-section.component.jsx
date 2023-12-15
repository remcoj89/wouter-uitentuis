import './contact-section.styles.scss';
import FormComponent from '../../form-component/form-component.component';

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h2>Beniewd wat wij voor uw club kunnen betekenen?</h2>
      <div className="flex-box">
        <div></div>
        <div><FormComponent /></div>
      </div>

    </div>

  )
}

export default ContactSection;

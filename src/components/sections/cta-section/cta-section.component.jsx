import './cta-section.styles.scss';
import Button from '../../button/button.component';

const CtaSection = () => {

  return (
    <section className="cta-container">
      <h2 className='cta-title'>Benieuwd wat wij voor u kunnen betekenen?</h2>
      <p className='cta-paragraph'>Neem dan vrijblijvend contact met ons op</p>
      <Button location="contact-section">Contact</Button>
    </section>
  )
};

export default CtaSection;

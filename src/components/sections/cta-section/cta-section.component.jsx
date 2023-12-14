import './cta-section.styles.scss';
import Button from '../../button/button.component'

const CtaSection = () => {
  return (
    <div className="cta-container">
      <h2>Benieuwd wat wij voor u kunnen betekenen?</h2>
      <p className='cta-paragraph'>Neem dan vrijblijvend contact met ons op</p>
      <Button>Contact</Button>
    </div>
  )
};

export default CtaSection;

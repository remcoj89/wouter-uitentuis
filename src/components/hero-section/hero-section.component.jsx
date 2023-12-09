import './hero-section.styles.scss';
import Button from '../button/button.component'

const HeroSection = () => {
  return (
    <header>
      <div className="hero-left">
        <h1>Wij Creëren Groene <span>Meesterwerken:</span></h1>
        <h3>
          <span>Ontdek Onze</span>
          <span>Toonaangevende</span>
          <span>Hovenierskunst.</span>
        </h3>
        <Button buttonType={'heroButton'}>Contact</Button>
      </div>
      <div className="hero-right">
      </div>
    </header>
  )
};

export default HeroSection;

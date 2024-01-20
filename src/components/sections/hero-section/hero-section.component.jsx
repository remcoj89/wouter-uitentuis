import './hero-section.styles.scss';
import Button from '../../button/button.component';

const HeroSection = ({sectionHero}) => {
  if(!sectionHero) {
    return;
  }
  const {title, subTitle} = sectionHero

  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <Button location="contact-section" buttonType={'heroButton'}>Contact</Button>
      </div>
      <div className="hero-right">
        <img src={require('../../../assets/images/hero-right.png')} alt="" />
      </div>
    </div>
  )
};

export default HeroSection;

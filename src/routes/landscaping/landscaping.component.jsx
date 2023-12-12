import './landscaping.styles.scss';
import HeroSection from '../../components/hero-section/hero-section.component';
import CartSection from '../../components/cart-section/cart-section.component';
import ProjectSection from '../../components/project-section/project-section.component';
import { useContext} from 'react';
import { appDataContext } from '../../assets/context/data-context/data.context';


const Landscaping = () => {

  const {landscapingData} = useContext(appDataContext);
  if(!landscapingData) {
    return;
  }
  const {sectionHero} = landscapingData;

  return (
    <main>
    <HeroSection sectionHero={sectionHero}/>
    <CartSection />
    <ProjectSection />
  </main>
  )
};

export default Landscaping;

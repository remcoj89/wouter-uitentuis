import './gardening.styles.scss';
import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';
import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';


const Gardening = () => {

  const {gardeningData} = useContext(appDataContext);
  if(!gardeningData) {
    return;
  }
  const {sectionHero, sectionSpecializations, projectSection} = gardeningData;


  return (
    <main>
      <HeroSection sectionHero={sectionHero} />
      <CartSection specialization={sectionSpecializations}/>
      <ProjectSection projects={projectSection}/>
    </main>
  )
};

export default Gardening;

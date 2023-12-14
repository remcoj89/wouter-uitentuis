import './gardening.styles.scss';
import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';

import { yearsActiveCalculator } from '../../utilities/yearsActiveCalculator';

import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';
import SocialProofSection from '../../components/sections/social-proof-section/social-proof-section.component';


const Gardening = () => {
  const yearsActive = yearsActiveCalculator(2003);

  const {gardeningData} = useContext(appDataContext);
  if(!gardeningData) {
    return;
  }
  const {sectionHero, sectionSpecializations, projectSection, sectionSocialProof} = gardeningData;


  return (
    <main>
      <HeroSection sectionHero={sectionHero} />
      <CartSection specialization={sectionSpecializations}/>
      <ProjectSection projects={projectSection}/>
      <SocialProofSection yearsActive={yearsActive} socialProof={sectionSocialProof}></SocialProofSection>
    </main>
  )
};

export default Gardening;

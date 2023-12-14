import './landscaping.styles.scss';

import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';

import { yearsActiveCalculator } from '../../utilities/yearsActiveCalculator';

import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';
import SocialProofSection from '../../components/sections/social-proof-section/social-proof-section.component';


const Landscaping = () => {
  const yearsActive = yearsActiveCalculator(2008);
  const {landscapingData} = useContext(appDataContext);
  if(!landscapingData) {
    return;
  }
  const {sectionHero, sectionSpecializations, projectSection, sectionSocialProof} = landscapingData;

  return (
    <main>
    <HeroSection sectionHero={sectionHero}/>
    <CartSection specialization={sectionSpecializations}/>
    <ProjectSection projects={projectSection}/>
    <SocialProofSection yearsActive={yearsActive} socialProof={sectionSocialProof}></SocialProofSection>
  </main>
  )
};

export default Landscaping;

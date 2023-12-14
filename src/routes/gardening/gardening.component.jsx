import './gardening.styles.scss';
import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';

import { yearsActiveCalculator } from '../../utilities/yearsActiveCalculator';

import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';
import SocialProofSection from '../../components/sections/social-proof-section/social-proof-section.component';
import CtaSection from '../../components/sections/cta-section/cta-section.component';

const Gardening = () => {
  const yearsActive = yearsActiveCalculator(2003);

  const {gardeningData} = useContext(appDataContext);
  if(!gardeningData) {
    return;
  }
  const {sectionHero, sectionSpecializations, sectionProject, sectionSocialProof} = gardeningData;


  return (
    <main>
      <HeroSection sectionHero={sectionHero} />
      <CartSection specialization={sectionSpecializations}/>
      <CtaSection />
      <SocialProofSection yearsActive={yearsActive} socialProof={sectionSocialProof}></SocialProofSection>
      <ProjectSection projects={sectionProject}/>
      <CtaSection />
    </main>
  )
};

export default Gardening;

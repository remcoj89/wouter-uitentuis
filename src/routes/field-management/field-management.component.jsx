import './field-management.styles.scss';

import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';
import CtaSection from '../../components/sections/cta-section/cta-section.component';
import SocialProofSection from '../../components/sections/social-proof-section/social-proof-section.component';
import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';


const FieldManagement = () => {

  const {fieldManagementData} = useContext(appDataContext);
    if(!fieldManagementData) {
      return;
    }
    const {sectionHero, sectionSpecializations, sectionProject, sectionSocialProof} = fieldManagementData;

  return (
    <main>
      <HeroSection sectionHero={sectionHero} />
      <CartSection specialization={sectionSpecializations}/>
      <CtaSection />
      <SocialProofSection socialProof={sectionSocialProof}></SocialProofSection>
      <ProjectSection projects={sectionProject}/>
      <CtaSection />
    </main>
  )
};

export default FieldManagement;

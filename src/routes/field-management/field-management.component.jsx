import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';

import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';
import CtaSection from '../../components/sections/cta-section/cta-section.component';
import SocialProofSection from '../../components/sections/social-proof-section/social-proof-section.component';
import ImageSection from '../../components/sections/image-section/image-section.component';
import ContactSection from '../../components/sections/contact-section/constact-section.component';
import DesktopFooterSection from '../../components/sections/desktop-footer-section/desktop-footer-section.component';


const FieldManagement = () => {

  const {fieldManagementData} = useContext(appDataContext);
    if(!fieldManagementData) {
      return;
    }
    const {sectionHero, sectionSpecializations, sectionProject, sectionSocialProof, sectionImages, sectionFaq} = fieldManagementData;

  return (
    <>
      <HeroSection sectionHero={sectionHero} />
      <main>
        <CartSection specialization={sectionSpecializations}/>
        <SocialProofSection socialProof={sectionSocialProof}></SocialProofSection>
        <ProjectSection projects={sectionProject}/>
        <CtaSection />
        <ImageSection images={sectionImages}/>
        <ContactSection faq={sectionFaq} />
      </main>
      <DesktopFooterSection />
    </>
  )
};

export default FieldManagement;

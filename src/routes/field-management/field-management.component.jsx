import './field-management.styles.scss';
import HeroSection from '../../components/sections/hero-section/hero-section.component';
import CartSection from '../../components/sections/cart-section/cart-section.component';
import ProjectSection from '../../components/sections/project-section/project-section.component';
import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';
import Button from '../../components/button/button.component'

const FieldManagement = () => {

    const {fieldManagementData} = useContext(appDataContext);
    if(!fieldManagementData) {
      return;
    }
    const {sectionHero, sectionSpecializations, sectionProject} = fieldManagementData;

  return (
    <main>
      <HeroSection sectionHero={sectionHero} />
      <CartSection specialization={sectionSpecializations}/>
      <div className="call-to-action">
        <h2>Benieuwd wat wij voor u kunnen betekenen?</h2>
        <p>Neem dan vrijblijvend contact met ons op</p>
        <Button>Contact</Button>
      </div>
      <ProjectSection projects={sectionProject}/>
    </main>
  )
};

export default FieldManagement;

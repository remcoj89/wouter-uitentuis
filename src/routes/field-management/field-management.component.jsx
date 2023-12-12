import './field-management.styles.scss';
import HeroSection from '../../components/hero-section/hero-section.component';
import CartSection from '../../components/cart-section/cart-section.component';
import ProjectSection from '../../components/project-section/project-section.component';
import { useContext} from 'react';
import { appDataContext } from '../../context/data-context/data.context';

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
      <ProjectSection projects={sectionProject}/>
    </main>
  )
};

export default FieldManagement;

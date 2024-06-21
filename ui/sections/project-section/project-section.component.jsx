// Styles
import ProjectComponent from '@/ui/components/project/project.component';
import Styles from './project-section.module.css';

const ProjectSection = () => {
  return (
    <section id="project-section">
      <div className={`wrapper ${Styles.projectsWrapper}`}>
        <ProjectComponent projectBanner = 'projectBannerRight'/>
        <ProjectComponent projectBanner = 'projectBannerLeft'/>
        <ProjectComponent projectBanner = 'projectBannerRight'/>
      </div>

    </section>
  )
}

export default ProjectSection;

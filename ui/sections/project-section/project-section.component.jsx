// Styles
import ProjectComponent from '@/ui/components/project/project.component';
import Styles from './project-section.module.css';

const ProjectSection = ({projectContent}) => {
  
  return (
    <section id="project-section">
      <div className={`wrapper ${Styles.projectsWrapper}`}>
      {projectContent.map((project, i) => (
        i % 2 === 0? (
        <ProjectComponent projectContent={project} projectBanner="projectBannerRight" key={i} />
        ) : (
        <ProjectComponent projectContent={project} projectBanner="projectBannerLeft" key={i} />
        )
      ))}
      </div>

    </section>
  )
}

export default ProjectSection;

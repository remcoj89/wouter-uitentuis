// Styles
import Styles from './project.module.css';

// Hooks
import Image from 'next/image';

// Components
import ProjectBanner from '../project-banner/project-banner.component';

const ProjectComponent = ({projectContent, projectBanner}) => {
  const {projectTitle, projectImage, projectDescription} =projectContent
  const {paragraph1,paragraph2, paragraph3} = projectDescription



  return (
    <div className={Styles.projectWrapper}>
      <Image
        alt={projectImage.altText}
        className={Styles.projectImage}
        height={500}
        src={projectImage.imageUrl}
        width={500}/>
      <article className={Styles.projectArticle}>
      <ProjectBanner bannerStyle={projectBanner}>
        <h4>{projectTitle}</h4>
      </ProjectBanner>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>


      </article>
    </div>
  )
}

export default ProjectComponent;

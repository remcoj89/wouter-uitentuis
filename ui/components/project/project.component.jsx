// Styles
import Styles from './project.module.css';

// Hooks
import Image from 'next/image';

// Components
import ProjectBanner from '../project-banner/project-banner.component';

const ProjectComponent = ({projectContent, projectBanner}) => {
  const {projectTitle, projectImage, projectDescription} =projectContent
  const {paragraph1, title1, paragraph2, title2,  paragraph3, title3, paragraph4} = projectDescription



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
          <h3>{title1}</h3>
          <p>{paragraph2}</p>
          <h3>{title2}</h3>
          <p>{paragraph3}</p>
          <h3>{title3}</h3>
          <p>{paragraph4}</p>


      </article>
    </div>
  )
}

export default ProjectComponent;

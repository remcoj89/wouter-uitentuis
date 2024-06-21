// Styles
import Styles from './project.module.css';

// Hooks
import Image from 'next/image';

// Components
import ProjectBanner from '../project-banner/project-banner.component';

const ProjectComponent = ({projectBanner}) => {

  const projectImage = {imageUrl: '/assets/images/field-management/hero_image-3.png', altText:'project Image'}

  return (
    <div className={Styles.projectWrapper}>
      <Image
        alt={projectImage.altText}
        className={Styles.projectImage}
        height={500}
        src={projectImage.imageUrl}
        width={500}/>
      <article className={Styles.projectArticle}>
      <ProjectBanner bannerStyle={projectBanner}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa nihil aliquam distinctio similique est quaerat aut at, quisquam et sapiente consequatur placeat fuga tenetur consectetur architecto numquam. Necessitatibus, consectetur?</p>
      </article>
    </div>
  )
}

export default ProjectComponent;

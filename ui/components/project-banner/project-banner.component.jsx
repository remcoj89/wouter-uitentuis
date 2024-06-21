// Styles
import Styles from './project-banner.module.css';

const ProjectBanner = ({bannerStyle}) => {

  return (
    <div className={`${Styles.projectBanner} ${Styles[bannerStyle]}`}>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis ipsum ullam.</h4>
    </div>
  )
}

export default ProjectBanner;

// Styles
import Styles from './project-banner.module.css';

const ProjectBanner = ({bannerStyle, children}) => {

  return (
    <div className={`${Styles.projectBanner} ${Styles[bannerStyle]}`}>
      {children}
    </div>
  )
}

export default ProjectBanner;

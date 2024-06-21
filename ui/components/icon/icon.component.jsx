import Styles from './icon.module.css';

const IconComponent = ({children, iconStyle}) => {
  return (
    <div className={`${Styles.icon} ${Styles[iconStyle]}`}>
      {children}
    </div>
  )
}


export default IconComponent;

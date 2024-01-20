import './button.styles.scss';
import { useContext } from 'react';
import {appScrollContext} from '../../context/scroll-context/scroll.context';

const BUTTON_TYPE_CLASSES = {
  heroButton: 'hero-button',
  submitButton: "submit-button"
};

const Button = ({children, buttonType, location }) => {
  const { handleScroll } = useContext(appScrollContext);

  const handleButtonClick = () => {
    handleScroll(location);
  };

  return(<button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} onClick={handleButtonClick}>{children}</button>
  )
};

export default Button

import Styles from './button.module.css';

const Button = ({children = "Klik hier"}) => {
  return (
    <button className={Styles.btnPrimary}>
      {children}
    </button>
  )
}

export default Button;

import Styles from './button.module.css'

const Button = ({children = "Klik hier", buttonStyle, buttonType}) => {

  return (
    <button className={`${Styles.btn} ${Styles[buttonStyle] || 'btnPrimary'}`} type={buttonType}>
      {children}
    </button>
  )
}

export default Button;

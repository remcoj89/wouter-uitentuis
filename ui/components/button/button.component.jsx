import Styles from './button.module.css'

const Button = ({children = "Klik hier", buttonStyle}) => {

  return (
    <button className={`${Styles.btn} ${Styles[buttonStyle] || 'btnPrimary'}`}>
      {children}
    </button>
  )
}

export default Button;

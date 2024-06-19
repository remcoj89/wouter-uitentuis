// Styling
import Styles from './icon-burger-menu.module.css';

export default function BurgerMenu({toggleBurgerMenu, isMenuOpen}) {

  return (
    <div className={Styles.burgerIconWrapper} onClick={toggleBurgerMenu}>
    <div className={`${Styles.bar1} ${isMenuOpen ? Styles.change : ""}`}></div>
    <div className={`${Styles.bar2} ${isMenuOpen ? Styles.change : ""}`}></div>
    <div className={`${Styles.bar3} ${isMenuOpen ? Styles.change : ""}`}></div>
  </div>
  )
}

'use client';

import Styles from './nav-bar.module.css';

// Hooks
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Icons
import { PhoneIcon, EmailIcon, CloseIcon, BurgerIcon } from '@/assets/icons';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.navWrapper}>
          <Link  className={Styles.logo} href="/">W. Uitentuis</ Link>
          <input type="radio" name="slide" className={Styles.navButton} id={Styles.cancelButton} />
          <input type="radio" name="slide" className={Styles.navButton} id={Styles.menuButton}  />

          <ul className={Styles.navLinks}>
            <label className={`${Styles.navButton} ${Styles.cancelButton}`} htmlFor={Styles.cancelButton}>
              <CloseIcon color="#ffff" />
            </label>
            <Link href='/' className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`} >Field management</Link>
            <Link href='/' className={`${Styles.navLink} ${pathname === '/hovenier' ? `${Styles.active}` : ""}`}>Hovenier</Link>
            <Link href='/' className={`${Styles.navLink} ${pathname === '/groen-onderhoud' ? `${Styles.active}` : ""}`}>Groen Onderhoud</Link>
            <div className={Styles.contactWrapper}>
              <Link href="mailto: info@wouteruitentuis.nl" id={Styles.emailLink} className={Styles.contactWrapperIcon}><EmailIcon /> info@wouteruitentuis.nl</Link>
              <Link href="tel: 0630272667" id={Styles.phoneLink} className={Styles.contactWrapperIcon}><PhoneIcon /> 06-30272667</Link>
            </div>
          </ul>

          <label className={`${Styles.navButton} ${Styles.menuButton}`} htmlFor={Styles.menuButton}>
            <BurgerIcon color="#ffff"/>
          </label>
        </div>
      </nav>
    </header>
  )
}


export default NavBar;

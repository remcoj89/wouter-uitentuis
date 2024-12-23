'use client';

import Styles from './nav-bar.module.css';

// Hooks
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef} from 'react'

// Icons
import { PhoneIcon, EmailIcon, CloseIcon, BurgerIcon } from '@/assets/icons';

const NavBar = () => {
  const cancelButtonRef = useRef(null);
  const pathname = usePathname();

  function handleNavLinkClick() {
    if (cancelButtonRef.current) {
      cancelButtonRef.current.checked = true;
    }
  }
  return (
    <header className={Styles.header}>
      <nav className={Styles.nav}>
        <div className={Styles.navWrapper}>
          <Link  className={Styles.logo} href="/">W. Uitentuis</ Link>
          <input type="radio" name="slide" className={Styles.navButton} id={Styles.cancelButton} ref={cancelButtonRef}/>
          <input type="radio" name="slide" className={Styles.navButton} id={Styles.menuButton}  />

          <ul className={Styles.navLinks}>

            <li>
              <label className={`${Styles.navButton} ${Styles.cancelButton}`} htmlFor={Styles.cancelButton}>
                <CloseIcon color="#ffff" />
              </label>
            </li>

            <li>
              <Link
                href='/'
                className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`}
                onClick={handleNavLinkClick} >
                  Field management
              </Link>
            </li>

            <li>
              <Link
                href='/hovenier'
                className={`${Styles.navLink} ${pathname === '/hovenier' ? `${Styles.active}` : ""}`}
                onClick={handleNavLinkClick}>
                  Hovenier
               </Link>
            </li>

            <li>
              <Link
                href='/groenonderhoud'
                className={`${Styles.navLink} ${pathname === '/groenonderhoud' ? `${Styles.active}` : ""}`}
                onClick={handleNavLinkClick}>
                  Groenonderhoud
              </Link>
            </li>


            <li className={Styles.contactWrapper}>
              <Link href="mailto: info@wouteruitentuis.nl" id={Styles.emailLink} className={Styles.contactWrapperIcon}><EmailIcon /> info@wouteruitentuis.nl</Link>
              <Link href="tel: 0630272667" id={Styles.phoneLink} className={Styles.contactWrapperIcon}><PhoneIcon /> 06-30272667</Link>
            </li>
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

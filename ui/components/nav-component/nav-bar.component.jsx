'use client';
// React Hooks
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';

// Styling
import Styles from './nav-bar.module.css';
import Link from 'next/link';

// Icons
import { PhoneIcon, EmailIcon } from '@/assets/icons';

// Components
import BurgerMenu from '@/assets/icon-burger-menu/icon-burger-menu.component';

const Navbar = () => {
const pathname = usePathname()
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [screenWidth, setScreenWidth] = useState(null)

useEffect(() => {setScreenWidth(window.screen.width)},[])

// Toggle burger menu
const toggleBurgerMenu = () => { setIsMenuOpen(!isMenuOpen)}

  return (
  <>
    <nav className={Styles.navbar}>
      <div className="wrapper">
        <div className={Styles.navContainer}>

          <Link  className={Styles.logo} href="/">W. Uitentuis</ Link>

          <div className={Styles.navLinkSection}>
            <div className={Styles.navlinks} style={isMenuOpen || screenWidth >= 478 ? {display: "flex"} : {display: "none"}}>
              <li className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`} ><Link href="/">Sportvelden</Link></li>
              <li className={`${Styles.navLink} ${pathname === '/hovenier' ? `${Styles.active}` : ""}`} ><Link href="/hovenier">Hovenier</Link></li>
              <li className={`${Styles.navLink} ${pathname === '/groen-onderhoud' ? `${Styles.active}` : ""}`} ><Link href="/groen-onderhoud">Groen Onderhoud</Link></li>
            </div>

            <div className={Styles.contactWrapper}>
              <Link href="mailto: info@wouteruitentuis.nl" className={Styles.contactWrapperIcon}><EmailIcon /> info@wouteruitentuis.nl</Link>
              <Link href="tel: 0630272667" className={Styles.contactWrapperIcon}><PhoneIcon /> 06-30272667</Link>
            </div>
          </div>
          <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isMenuOpen={isMenuOpen}/>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar

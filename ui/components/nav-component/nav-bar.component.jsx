'use client';
// React Hooks
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';

// Styling
import Styles from './nav-bar.module.css';
import Link from 'next/link';

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
          <Link href="/">WESTEND DIGITAL</ Link>
          <div className={Styles.navlinks} style={isMenuOpen || screenWidth >= 478 ? {display: "flex"} : {display: "none"}}>
            <li className={`${Styles.navLink} ${pathname === '/' ? `${Styles.active}` : ""}`} ><Link href="/">home</Link></li>
            <li className={`${Styles.navLink} ${pathname === '/about' ? `${Styles.active}` : ""}`} ><Link href="/about">about us</Link></li>
            <li className={`${Styles.navLink} ${pathname === '/contact' ? `${Styles.active}` : ""}`} ><Link href="/plan">contact</Link></li>
          </div>
          <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} isMenuOpen={isMenuOpen}/>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar

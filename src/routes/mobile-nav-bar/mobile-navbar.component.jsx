import './mobile-navbar.styles.scss';
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const MobileNavbar = () => {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false)

  function toggleMenu() {
    setMenuActive(!menuActive)
  }
  return (
    <>
      <nav className='mobile-nav-container'>
        <div className="nav-tabs">
          <Link to="/" className={`nav-tab ${location.pathname === '/' ? 'active' : 'not-active'}`}>Sportvelden</Link>
          <Link to="/hovenier" className={`nav-tab ${location.pathname === '/hovenier' ? 'active' : 'not-active'}`}>Hovenier</Link>
          <Link to="/groen-voorziening" className={`nav-tab ${location.pathname === '/groen-voorziening' ? 'active' : 'not-active'}`}>Groen voorziening</Link>
        </div>
        <div className="nav-bar">
          <div className="nav-wrapper">

            <div className="logo">
              <h1 id="logo">W. UITENTUIS</h1>
            </div>

            <div id="burger-menu">
            <Icon className='burger-menu' icon={menuActive ? "gg:close" : "iconamoon:menu-burger-horizontal-light"} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default MobileNavbar

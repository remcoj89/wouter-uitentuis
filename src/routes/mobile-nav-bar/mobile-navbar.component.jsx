import './mobile-navbar.styles.scss';
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react'

const MobileNavbar = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false)

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
              <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFF"/>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default MobileNavbar

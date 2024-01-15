import './navigation.styles.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';


const Navigation = () => {

  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.screen.width);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function toggleMenu() {
    setMenuActive(!menuActive)
  }

  return(
    <>
      <nav className='nav-container'>
        { screenWidth >= 600 ? <div className="nav-tabs">
          <Link to="/" className={`nav-tab ${location.pathname === '/' ? 'active' : 'not-active'}`}>Sportvelden</Link>
          <Link to="/hovenier" className={`nav-tab ${location.pathname === '/hovenier' ? 'active' : 'not-active'}`}>Hovenier</Link>
          <Link to="/groen-voorziening" className={`nav-tab ${location.pathname === '/groen-voorziening' ? 'active' : 'not-active'}`}>Groen voorziening</Link>
        </div> : ''

      }

        <div className="nav-bar">
          <div className="nav-wrapper">
            <div className="logo">
              <h1 id="logo">W. UITENTUIS</h1>
            </div>

            { screenWidth >= 600 ?
              <div className="contact">
                <span>info@wouteruitentuis.nl</span>
                <span>06-30272667</span>
            </div> :
            <Icon className='burger-menu' icon={menuActive ? "gg:close" : "iconamoon:menu-burger-horizontal-light"} onClick={toggleMenu} />
            }

          </div>
        </div>

      </nav>
      <Outlet/>
    </>
  )
};

export default Navigation;

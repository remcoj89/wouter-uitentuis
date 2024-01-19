import './mobile-navbar.styles.scss';
import  { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';

const MobileNavbar = () => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false)

  const [containerHeight, setContainerHeight] = useState(0);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const measureContainerHeight = () => {
      if (navContainerRef.current) {
        const height = navContainerRef.current.offsetHeight;
        setContainerHeight(height);
      }
    };

    window.addEventListener('resize', measureContainerHeight);
    measureContainerHeight();

    return () => {
      window.removeEventListener('resize', measureContainerHeight);
    };
    }, []);

    const handleLinkClick = () => {
      setOpen(false);

    };

  return (
    <>
      <nav className={`mobile-nav-container responsive`} ref={navContainerRef}>
        <div className="nav-bar">
          <div className="nav-wrapper">
            <div className="logo">
              <h1 id="logo">W. UITENTUIS</h1>
            </div>

            <div id="burger-menu">
              <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFF"/>
            </div>

            {isOpen && (
            <div className="nav-links" style={{ top: containerHeight }}>
              <Link onClick={handleLinkClick}  to="/" className={`nav-link ${location.pathname === '/' ? 'active' : 'not-active'}`}>Sportvelden</Link>
              <Link onClick={handleLinkClick}  to="/hovenier" className={`nav-link ${location.pathname === '/hovenier' ? 'active' : 'not-active'}`}>Hovenier</Link>
              <Link onClick={handleLinkClick}  to="/groen-voorziening" className={`nav-link ${location.pathname === '/groen-voorziening' ? 'active' : 'not-active'}`}>Groen voorziening</Link>
            </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default MobileNavbar

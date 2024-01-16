import './desktop-navigation.styles.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';

const DesktopNavigation = () => {

  const location = useLocation();

  return(
    <>
      <nav className='desktop-nav-container'>
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
            <div className="contact">
                <span>info@wouteruitentuis.nl</span>
                <span>06-30272667</span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
};

export default DesktopNavigation;

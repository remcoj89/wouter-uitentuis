import {Link, useLocation } from 'react-router-dom';
import './navigation-modal-mobile.styles.scss';

const NavigationModalMobiel = () => {
  const location = useLocation();
  return (
    <div className="modal">
      <div className='mobile-nav-container'>
        <Link to="/" className={`nav-tab ${location.pathname === '/' ? 'active' : 'not-active'}`}>Sportvelden</Link>
        <Link to="/hovenier" className={`nav-tab ${location.pathname === '/hovenier' ? 'active' : 'not-active'}`}>Hovenier</Link>
        <Link to="/groen-voorziening" className={`nav-tab ${location.pathname === '/groen-voorziening' ? 'active' : 'not-active'}`}>Groen voorziening</Link>
      </div>
    </div>
  )
}

export default NavigationModalMobiel

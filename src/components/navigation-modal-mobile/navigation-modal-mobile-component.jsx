import {Link, useLocation } from 'react-router-dom';

const NavigationModalMobiel = () => {
  const location = useLocation();
  return (
    <>
      <Link to="/" className={`nav-tab ${location.pathname === '/' ? 'active' : 'not-active'}`}>Sportvelden</Link>
      <Link to="/hovenier" className={`nav-tab ${location.pathname === '/hovenier' ? 'active' : 'not-active'}`}>Hovenier</Link>
      <Link to="/groen-voorziening" className={`nav-tab ${location.pathname === '/groen-voorziening' ? 'active' : 'not-active'}`}>Groen voorziening</Link>
    </>
  )
}

export default NavigationModalMobiel

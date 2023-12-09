import './navigation.styles.scss';

const Navigation = () => {

  return(
    <nav className='nav-container'>
      <div className="nav-tabs">
        <span className='nav-tab'>Sportvelden</span>
        <span className='nav-tab'>Hovenier</span>
        <span className='nav-tab'>Groen voorziening</span>
      </div>
      <div className="nav-bar">
        <div className="logo">
          <h1 id="logo">WOUTER UITENTUIS</h1>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;

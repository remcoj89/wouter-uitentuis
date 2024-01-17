import {Routes, Route} from 'react-router-dom';
import DesktopNavigation from './routes/desktop-nav-bar/desktop-navigation.component';
import MobileNavigation from './routes/mobile-nav-bar/mobile-navbar.component';
import React, { useState, useEffect } from 'react';
import FieldManagement from './routes/field-management/field-management.component';
import Gardening from './routes/gardening/gardening.component';
import Landscaping  from './routes/landscaping/landscaping.component';

import './App.scss';

function App() {
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

  return (
    <Routes>
      <Route path="/" element={screenWidth > 600 ?  <DesktopNavigation/> : <MobileNavigation/>}>
          <Route index  element={<FieldManagement />}/>
          <Route path='/hovenier' element={<Gardening />}/>
          <Route path='/groen-voorziening' element={<Landscaping/>}/>
      </Route>
    </Routes>
  );
}

export default App;

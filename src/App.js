import {Routes, Route} from 'react-router-dom';
import { useContext} from 'react';
import { appScreenWidthContext } from './context/screen-width-context/screen-width.context';

import DesktopNavigation from './routes/desktop-nav-bar/desktop-navigation.component';
import MobileNavigation from './routes/mobile-nav-bar/mobile-navbar.component';
import FieldManagement from './routes/field-management/field-management.component';
import Gardening from './routes/gardening/gardening.component';
import Landscaping  from './routes/landscaping/landscaping.component';


import './App.scss';

function App() {
  const {screenWidth} = useContext( appScreenWidthContext)

  return (
    <Routes>
      <Route path="/" element={screenWidth > 600 ?  <DesktopNavigation/> : <MobileNavigation/>}>
          <Route index element={<FieldManagement />}/>
          <Route path='/hovenier' element={<Gardening />}/>
          <Route path='/groen-voorziening' element={<Landscaping/>}/>
      </Route>
    </Routes>
  );
}

export default App;

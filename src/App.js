import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/naviagtion/navigation.component'

import FieldManagement from './routes/field-management/field-management.component';
import Gardening from './routes/gardening/gardening.component';
import Landscaping  from './routes/landscaping/landscaping.component';

import './App.scss';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
          <Route index  element={<FieldManagement />}/>
          <Route path='/hovenier' element={<Gardening />}/>
          <Route path='/groen-voorziening' element={<Landscaping/>}/>
      </Route>
    </Routes>

  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/naviagtion/navigation.component'

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>

      </Route>
    </Routes>

  );
}

export default App;

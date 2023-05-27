import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
import Menu from './Menu';
import Camera from './Camera';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route exact path='/' element={< Camera />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/verify' element={< Verify />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

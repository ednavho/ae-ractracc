import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Title/>
      <>
        <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route path="/verify/:id/:token" element={<Verify />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

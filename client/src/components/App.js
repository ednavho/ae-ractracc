import '../styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
        <Route exact path='/' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

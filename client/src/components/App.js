import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import {HashRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

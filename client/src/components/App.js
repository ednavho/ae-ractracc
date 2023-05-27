import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
<<<<<<< HEAD
import Menu from './Menu';
import Camera from './Camera';

=======
import UserProfile from './UserProfile';
import Post from './Post';
>>>>>>> main
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Feed from "./Feed";



import React from 'react';

function App() {
<<<<<<< HEAD
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
=======
   return (
      <div className='App'>
         <BrowserRouter>
            <>
               <Routes>
                  <Route exact path='/' element={<Login />} />
                  <Route exact path='/feed' element={<Feed />} />
                  <Route exact path='/register' element={<Register />} />
                  <Route exact path='/post' element={<Post />} />
                  <Route exact path='/userprofile' element={<UserProfile />} />
                  <Route exact path='/verify' element={<Verify />} />
               </Routes>
            </>
         </BrowserRouter>
      </div>
      
>>>>>>> main
  );
}

export default App;

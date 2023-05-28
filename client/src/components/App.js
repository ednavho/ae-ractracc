import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
import Menu from './Menu';
import Camera from './Camera';
import UserProfile from './UserProfile';
import Post from './Post';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Feed from "./Feed";



import React from 'react';

function App() {

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
                  <Route exact path='/camera' element={<Camera />} />
                  <Route exact path='/verify' element={<Verify />} />
               </Routes>
            </>
         </BrowserRouter>
      </div>
      
  );
}

export default App;

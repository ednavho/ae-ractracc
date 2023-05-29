import '../styles/App.css';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
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
                  <Route path='/verify/:id/:token' element={<Verify />} />
               </Routes>
            </>
         </BrowserRouter>
      </div>
      
  );
}

export default App;

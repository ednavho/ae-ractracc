import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
import Profile from './Profile';
import Post from './Post';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroller';
// import { useInfiniteQuery} from 'react-query';
// import Navbar from "./navbar";
// import PostCard from "./postCard";
import Feed from "./Feed";



import React from 'react';

function App() {
   return (
      <BrowserRouter>
       <>
          <Title/>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/feed' element={<Feed />} />
           <Route exact path='/register' element={<Register />} />
           <Route exact path='/post' element={<Post />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/verify' element={<Verify />} />
         </Routes>
         </>
      </BrowserRouter>
  );
}

export default App;

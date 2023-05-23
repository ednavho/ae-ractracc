import '../styles/App.css';
import Title from './Title';
import Login from './Login';
import Register from './Register';
import Verify from './Verify';
import Menu from './Menu';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery} from 'react-query';
import Navbar from "./navbar";
import PostCard from "./postCard";
import Feed from "./Feed";



import React from 'react';

function App() {
   return (
  //  <React.Fragment>
      <BrowserRouter>
        <>
          <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/verify' element={<Verify />} />
          </Routes>
        </>
      </BrowserRouter>
  //  </React.Fragment>
  );
}

export default App;

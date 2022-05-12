import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import { Timeline } from './components/noautenticate/Timeline';
import { Home } from './components/autenticate/Home';
import { loginWithGoogle } from './lib/firebaseAuth';
import { logOut } from './lib/firebaseAuth';
import './App.css';
import NotFound from './components/noautenticate/NotFound';


export function App() {
  
  return (
       
      <Routes>
       <Route path="/" element = {<Home loginGoogle = { loginWithGoogle } />} />
       <Route path="/timeline" element = {< Timeline signOut = { logOut } />} />
       <Route path="*" element = {< NotFound />} />

       </Routes>

    
  );
};

export default App;

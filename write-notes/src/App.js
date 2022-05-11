import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AccesTimeline } from './components/noautenticate/Timeline';
import { Home } from './components/autenticate/Home';
import { loginWhitGoogle } from './lib/firebaseAuth';
import './App.css';

export function App() {
  
  return (
       
      <Routes>
       <Route path="/" element={<Home loginGoogle = { loginWhitGoogle } />} />
       <Route path="/Timeline" element={<AccesTimeline/>}/>
     </Routes>

    
  );
};

export default App;

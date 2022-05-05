
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginWhitGoogle } from './components/LoginGoogle'
import { Home } from './components/Home'
import './App.css';
//write-notes\src\App.css

export function App() {
  return (
       
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/LoginGoogle" element={<LoginWhitGoogle/>}/>
     </Routes>

    
  );
};

export default App;

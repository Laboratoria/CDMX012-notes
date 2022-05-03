import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home'
import { GoogleSignIn } from './components/Googleauth';
import { Notes } from './components/Notes';
import { SignUp } from './components/Signup'
import { SignIn } from './components/Signin'
import { AuthContextProvider } from './auth/Auth';
//import { useState } from 'react';
//import { PrivateRoutes } from './PrivateRoutes';
//import { PublicRoutes } from './PublicRoutes';
export function App () 
{
    /*const [isAuth, setIsAuth] = useState (false);
    
    return (
        <>
        { 
        isAuth ?
        <PrivateRoutes/> :
        <PublicRoutes setIsAuth = {setIsAuth}/>
        }
        <
  );*/
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<GoogleSignIn />} />
        <Route path = "/Signup" element = {<SignUp />}/>
        <Route path = "/Signin" element = {<SignIn />}/>
        <Route path = "/Notes" element = {<Notes />}/>
      </Routes> 
    </AuthContextProvider>
)
  
} export default App;

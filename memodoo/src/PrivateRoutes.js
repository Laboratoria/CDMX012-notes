//import { GoogleSignIn } from './components/Authentication';
import React from 'react';
import { Notes } from './components/Notes';
import { SignUp } from './components/Signup'
import { Routes, Route } from "react-router-dom";

export function PrivateRoutes () 
{
    return (
        <Routes>
                <Route path = "/Notes" element = {<Notes />}/>
                <Route path = "/Signup" element = {<SignUp />}/>
        </Routes>
        );
}
export default PrivateRoutes
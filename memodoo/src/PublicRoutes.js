import React from 'react';
import './App.css';
import { Home } from './components/Home'
import { Authscreen } from './components/Authscreen';
import { Routes, Route, Navigate } from "react-router-dom";

export function PublicRoutes ({setIsAuth}) 
{  
    return (
        <Routes>
                <Route path="/Home" element={<Home setIsAuth={setIsAuth} />} />
                <Route path="/Authscreen" element={<Authscreen setIsAuth={setIsAuth} />} />
                <Route path = "*" element={<Navigate to = "/" replace/>}/>
        </Routes>
        );
}
export default PublicRoutes

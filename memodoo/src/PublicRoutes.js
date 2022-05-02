import './App.css';
import { Home } from './components/Home'
//import { Authscreen } from './components/Authscreen';
import { Routes, Route, Navigate } from "react-router-dom";

export function PublicRoutes ({setIsAuth}) 
{  
    return (
        <Routes>
                <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
                <Route path = "/Notes" element={<Navigate to = "/Notes" replace/>}/>
        </Routes>
        );
}
export default PublicRoutes

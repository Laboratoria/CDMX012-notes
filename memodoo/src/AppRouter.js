import './App.css';
import { useState } from 'react';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export function AppRouter () 
{
    const [isAuth, setIsAuth] = useState (false);
    
    return (
        <>
        { 
        isAuth ?
        <PrivateRoutes/> :
        <PublicRoutes setIsAuth = {setIsAuth}/>

        /* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Authentication" element={<GoogleSignIn />} />
        <Route path = "/Notes" element = {<Notes />}/>
        </Routes> */
        }
        </>
  );
} export default AppRouter;

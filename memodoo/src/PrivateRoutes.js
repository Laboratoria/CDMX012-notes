import { GoogleSignIn } from './components/Authentication';
import { Notes } from './components/Notes';
import { Routes, Route } from "react-router-dom";

export function PrivateRoutes () 
{
    return (
        <Routes>
                <Route path="/Authentication" element={<GoogleSignIn />} />
                <Route path = "/Notes" element = {<Notes />}/>
        </Routes>
        );
}
export default PrivateRoutes
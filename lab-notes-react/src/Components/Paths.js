import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import { Notes } from './AllNotes';
import { loginGoogle, logOut} from './Lib/Auth';
import { NewNote } from "./NewNote";
import { EditNote } from './EditNote';

export const Paths = ({isAutenticate}) => { 
    return ( 
    <div>
        {isAutenticate ?
        <Routes>
            <Route path="/" element={<Notes logOut= {logOut} />} />
            <Route path="/NewNote" element= {<NewNote/>} />
            <Route path="/EditNote" element= {<EditNote/>} />
        </Routes>:
        <Routes>
            <Route path="/" element={<Login loginGoogle = {loginGoogle} />} />
        </Routes>}
        
    </div>
);
}

// export default Paths; 
import './App.css';
import { Home } from './components/Home';
import { GoogleSignIn } from './components/Authentication';
import { Notes } from './components/Notes';
import { Routes, Route } from "react-router-dom";

function App()
{

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Authentication" element={<GoogleSignIn />} />
        <Route path = "/Notes" element = {<Notes />}/>
    </Routes>
  );
}

export default App;

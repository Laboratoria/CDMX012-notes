import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Register from "./Routes/noAuthenticate/Register";
import Home from "./Routes/Authenticate/Home";
import CreateNote from "./Routes/Authenticate/CreateNote";
import NotesView from "./Routes/Authenticate/NotesView";
import DisplayNote from "./Routes/noAuthenticate/Error";
import EditNote from "./Routes/Authenticate/EditNote";
import Error from "./Routes/noAuthenticate/Error";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "./lib/firebaseConfig";
import Cierre from "./Routes/noAuthenticate/Cierre";


function App() {
  const [isAutenticate, setAutheticate] = useState(null);
//se autentica si el usuario tiene permisos para acceder 
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        setAutheticate(user);

        console.log(user);
      } else {
        setAutheticate(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {isAutenticate? (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path="/createNote" element={<CreateNote />} />
          <Route path="/notesView" element={<NotesView />} />
          <Route path="/displayNote" element={<DisplayNote />} />
          <Route path="/EditNote" element={<EditNote />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/cierre" element={<Cierre />} />
          <Route path="/" element={<Register />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

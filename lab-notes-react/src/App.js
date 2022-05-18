import './App.css';
import  * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Paths } from './Components/Paths';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
const [isAutenticate, setAutenticate] = useState(null)
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    setAutenticate(user)
  } else {
  setAutenticate(null)
  }
});

  return (
    <div className="Container">
      <BrowserRouter>
        <Paths isAutenticate={isAutenticate} />
      </BrowserRouter>
    </div>
  );
}

export default App;

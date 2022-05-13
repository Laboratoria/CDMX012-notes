import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Timeline } from "./components/noautenticate/Timeline";
import { Home } from "./components/autenticate/Home";
import { loginWithGoogle } from "./lib/firebaseAuth";
import { logOut } from "./lib/firebaseAuth";
import "./App.css";
import NotFound from "./components/noautenticate/NotFound";
import { auth, onAuthStateChanged } from "./lib/firebase";


export function App() {
  const [isAutenticate, setAutenticate] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAutenticate(user);
        console.log(user);
      } else {
        setAutenticate(null);
      }
    });
  }, []) 

  
console.count(isAutenticate);
  return (
    <Routes>
      {isAutenticate ? (
        <Route path="/timeline" element={<Timeline signOut={logOut} />} />
      ) : (
        <>
          <Route path="/" element={<Home loginGoogle={loginWithGoogle} />} />
          <Route path="*" element={<NotFound />} />
        </>
      )}
    </Routes>
  );
}

export default App;

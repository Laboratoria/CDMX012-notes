import { Routes, Route } from "react-router-dom";
import Login from "../components/noauthenticate/Login";
import Notes from "./authenticate/Notes";
import {LoginWithGoogle, logOut} from "../lib/firebaseAuth.js";



function Paths({ isAuthenticate }) {
  return (
    <div>
      {isAuthenticate? (
        <Routes>
          <Route
            path="/"
            element={<Notes logOut={logOut} />}
          ></Route>
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Login LoginWithGoogle={LoginWithGoogle} />}
          ></Route>
        </Routes>
      )}
    </div>
  );
}

export default Paths;

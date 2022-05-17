import { signOut } from "firebase/auth";
import React from "react";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
 import { authentication } from "../lib/firebaseConfig"

function Header() {
    // const navigate = useNavigate();
    // const loginClick = () => {
    //     navigate("/");
    // }
const logOut = ()=>{ 
    signOut(authentication).then((re) => {
        console.log(signOut)
        console.log(re)
    }).catch((error) => {
        // An error happened.
    });
}
    return (
        <div className='registro'>
            <h2>Bienvenida a tus notas </h2>
            <button onClick={logOut} className='logOut' >Cerrar sesión</button>
        </div>
    )
}

export default Header;
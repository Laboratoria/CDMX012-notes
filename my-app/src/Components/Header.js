import React from "react";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { authentication } from "../lib/firebaseConfig"

function Header() {
    // const navigate = useNavigate();
    // const loginClick = () => {
    //     navigate("/");
    // }

    // signOut(authentication).then((re) => {
    //     console.log(re)
    // }).catch((error) => {
    //     // An error happened.
    // });
    return (
        <div className='registro'>
            <h2>Bienvenida a tus notas </h2>
            <button className='logOut' >Cerrar sesión</button>
        </div>
    )
}

export default Header;
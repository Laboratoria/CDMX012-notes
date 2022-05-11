import React from "react";
import { useNavigate } from "react-router-dom";


function Header (){
    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/");
    }
    return(
    <div>
        <h1>Bienvenida a tus notas </h1>
        <button onClick={loginClick}>Cerrar sesión</button>
    </div>
)}

export default Header;
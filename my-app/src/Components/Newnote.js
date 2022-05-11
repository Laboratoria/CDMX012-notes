import React from "react";
import { useNavigate } from "react-router-dom";
function NewNote (){
    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/home");
    }
    return ( 
    <div>
        <input></input>
        <button onClick={loginClick}>Guardar</button>

    </div>
    )
}

export default NewNote;
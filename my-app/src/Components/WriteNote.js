import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "./WriteNoteStyles";

function WriteNote (){

    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/createNote");
    }
    return(

        <Button onClick={loginClick}>Crear nota</Button>
    )
}

export default WriteNote;
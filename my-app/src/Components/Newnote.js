import React from "react";

import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Textarea } from "./styles";
function NewNote (){
    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/home");
    }
    return ( 
    <div>
        <Form>
        <Input 
        type='text'
        placeholder="Nombre de tú nota"></Input>
        <Textarea
        placeholder="Escribe tú nota"></Textarea>

        <Button onClick={loginClick} placeholder = {'Escribe tu nota'} >Guardar</Button>

        </Form>
    </div>
    )
}

export default NewNote;
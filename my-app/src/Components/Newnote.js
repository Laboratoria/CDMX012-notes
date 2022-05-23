import React from "react";

// import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Textarea } from "./styles";
import { addDoc, collection } from "firebase/firestore";
import { db} from "../lib/firebaseConfig";
import { useState } from "react";

     const NewNote=  () =>{
         const[notas, setNotas]= useState('');
         
         const collectionNotas= collection(db, "notas")
        
         const yanose = async (e)=>{
             e.preventDefault()
             await addDoc (collectionNotas, { notas: notas , cuerpo: notas  })

         }


    return ( 
    <div>
        <Form
        onSubmit={yanose}>
            <div>
        <Input 
        type='text'
        placeholder="Nombre de tú nota"
        value={notas}
        onChange= {(e)=>setNotas(e.target.value)}
        ></Input>
        <Textarea
        placeholder="Escribe tú nota"></Textarea>
        </div>

        <Button placeholder = {'Escribe tu nota'} >Guardar</Button>

        </Form>
    </div>
    );
}
export default NewNote;
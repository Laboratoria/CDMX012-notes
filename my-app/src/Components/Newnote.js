import React from "react";

// import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Textarea } from "./styles";
import { addDoc, collection } from "firebase/firestore";
import { db} from "../lib/firebaseConfig";
import { useState } from "react";

     const NewNote=  () =>{
         const[notas, setNotas]= useState('');
         const [cuerpo, setCuerpo]= useState ("");

         
         const collectionNotas= collection(db, "notas")
        console.log(collectionNotas)
         const yanose = async (e)=>{
             e.preventDefault()
             await addDoc (collectionNotas, { titulo: notas , descripcion: cuerpo  })
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
        placeholder="Escribe tú nota" onChange={(e)=>{setCuerpo(e.target.value);
        }}></Textarea>
        </div>

        <Button onClick={yanose} placeholder = {'Escribe tu nota'} >Guardar</Button>

        </Form>
    </div>
    );
}
export default NewNote;
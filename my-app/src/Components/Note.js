import React, { useEffect, useState } from "react";
import {onSnapshot } from "firebase/firestore";
import { q } from "../lib/database";
import { Div, Div2, Form, Input, Input2 } from "./NoteStyles";


const Note = () => {
    useEffect (()=>{
    onSnapshot(q, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    setDatalist(data)
  }) 
},[])
 
const [datList, setDatalist]= useState (null) 
 
return(
    <Div>
      <form>
      {datList && datList.map((allData)=> (
                        <Form>
                      <Div2>
                        <Input value={allData.titulo}></Input>
                        <Input2 value={allData.descripcion}></Input2>
                      </Div2>
                        </Form> 
                    ))}
                </form> 
    </Div>
)
}
export default Note;
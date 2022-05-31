import React, { useEffect, useState } from "react";
import {onSnapshot } from "firebase/firestore";
import { q } from "../lib/database";


const Note = ()=>{
    useEffect (()=>{
    onSnapshot(q, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data().titulo);

    });
    setDatalist()
  }) 
},[]) 
const [datList, setDatalist]= useState (null)  
return(
    <div>
      {datList && datList.map((allData)=> <p>allData</p>)}  
    </div>
)
}
export default Note;
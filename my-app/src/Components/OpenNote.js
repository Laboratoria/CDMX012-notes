import React from "react";
import { FaExpandAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OpenNote = ()=> {


    const navigate = useNavigate();
//     const openEditNote= ()=>{
// console.log("abriendo navegacion de notas")
        navigate('/notesView');
    
return (

    <button>
        <FaExpandAlt/>
    </button>
)
    
}

export default OpenNote;
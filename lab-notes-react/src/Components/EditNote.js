import '../StyleSheets/NewNote.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { updateDoc, doc } from "firebase/firestore";
import { db } from './Lib/FirebaseConfig';

export const EditNote = () => {

  const originalInputs = {
        title: "",
        description: ""
    }

    const [oldValues, setOldValues] = useState(originalInputs);
        
    const updateNote = async (id, newTitle, newDesc) => {
    const noteDoc = doc(db, 'myNotes', id);

    await updateDoc(noteDoc, { 
        title: newTitle,
        description: newDesc
        });
        setOldValues(updateNote)
}; 


    const navigate = useNavigate();
    return (
        <div className="notesContainer">
        <form className="container" >
            <i class="material-icons" id="cancel" onClick={() =>{navigate(-1)}}>cancel</i>
            <input className="title" type="text" name="title" /> 
            <input className="note" type="text" name="description" /> 
            <button className="btnSave" type="submit" onClick={() =>{navigate(-1)}}>Save</button>
        </form>
        </div>
    )
}

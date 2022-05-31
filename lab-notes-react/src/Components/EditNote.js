import '../StyleSheets/NewNote.css';
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from './Lib/FirebaseConfig';

export const EditNote = () => {
    const [originalTitle, setOriginalTitle] = useState("");
    const [originalDescription, setOriginalDescription] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
        
    const updateNotes = async (e) => {
        e.preventDefault()
        const noteDoc = doc(db, 'myNotes', id);
        const data = {
            title: originalTitle,
            description: originalDescription}
        await updateDoc(noteDoc, data);
        } 
    
    const handleEdit = async (id) => {
        const noteRef = await getDoc(doc(db, 'myNotes', id));
        if(noteRef.exists()) {
            // console.log('la nota se puede editar')
            setOriginalTitle(noteRef.data().title);
            setOriginalDescription(noteRef.data().description);
        } else {
            console.log('la nota no existe')
        }
    } 

    useEffect(() => {
        handleEdit(id);
    }, [])

    return (
        <div className="notesContainer">
        <form className="container" onSubmit={updateNotes}>
            <i class="material-icons" id="cancel" onClick={() =>{navigate(-1)}}>cancel</i>
            <input className="title" type="text" value={originalTitle} onChange={(e) => setOriginalTitle(e.target.value)} /> 
            <input className="note" type="text" name="description" value={originalDescription} onChange={(e) => setOriginalDescription(e.target.value)} /> 
            <button className="btnSave" type="submit" onClick={() =>{navigate(-1)}}> Save</button>
        </form>
        </div>
    )
}
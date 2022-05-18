import React from 'react';
import '../StyleSheets/NewNote.css';
import { useNavigate } from "react-router-dom";
import { db } from './Lib/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";

export const NewNote = () =>
{
    const saveNote = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;

        addDoc(collection(db, 'myNotes'), {
                title: title,
                description: description
            })
            .then(() => {
                console.log('nota creada');
            })
    };

const navigate = useNavigate();
    return (
        <form className="container" onSubmit={saveNote}>
            <input className="title" type="text" placeholder="Title" name="title" />
            <input type="text" className="note" placeholder="Note" name="description" />
            <button className="btnSave" type="submit" onClick={() =>{navigate(-1)}}>Save</button>
        </form>
    );
}

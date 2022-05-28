import React from 'react';
import '../StyleSheets/NewNote.css';
import { useNavigate } from "react-router-dom";
import { db, auth } from './Lib/FirebaseConfig';
import { collection, addDoc, serverTimestamp} from "firebase/firestore";

export const NewNote = () =>
{
    const saveNote = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;

        addDoc(collection(db, 'myNotes'), {
                title: title,
                description: description,
                uid: auth.currentUser.uid,
                date: serverTimestamp(),
            })
            .then(() => {
            })
    };

const navigate = useNavigate();
    return (
        <div className="notesContainer">
        <form className="container" onSubmit={saveNote}>
            <i class="material-icons" id="cancel" onClick={() =>{navigate(-1)}}>cancel</i>
            <input className="title" type="text" placeholder="Title" name="title" />
            <input className="note" type="text" placeholder="Note" name="description"/>
            <button className="btnSave" type="submit" onClick={() =>{navigate(-1)}}>Save</button>
        </form>
        </div>
    );
}

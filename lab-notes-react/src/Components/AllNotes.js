import React, { useState, useEffect } from 'react';
import { logOut } from './Lib/Auth';
import '../StyleSheets/AllNotes.css'; 
import { useNavigate } from 'react-router-dom';
import { collectionRef, auth } from './Lib/FirebaseConfig';
import { where, query, orderBy, onSnapshot } from "firebase/firestore";
import { deleteNote } from './DeleteNote';

export const Notes = () => 
{
    const [notes, setNotes] = useState([]);

    const dataNotes = () => {
        const q = query(collectionRef, orderBy("date", "desc"), where("uid", "==", auth.currentUser.uid));
        onSnapshot(q, (querySnapshot) => {
            setNotes(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
    });
    }

    useEffect(() => {
        dataNotes();
    }, []);

    const navigate = useNavigate()
    return (
        <>
            <header> MyNotes </header>
            <i class="material-icons" id="exit" onClick={() =>{logOut()}}>exit_to_app</i> 
            <div className="all-notes-contain">
                    {notes.map((notes, index) => {
                        return  <div className="individual-notes" key={index}>
                        <section className="delete-box">
                        <i class="material-icons" id="delete" onClick={() =>{deleteNote(notes.id)}}>delete</i>
                        </section>
                        <h3 className="note-title">{notes.title}</h3>
                        <p className="note-description"> {notes.description} </p>
                        <section className="edit-box">
                        <i class="material-icons" id="edit" onClick={() =>{navigate(`/EditNote/${notes.id}`)}}>edit</i>
                        </section>
                        </div>
                    })}
            </div>
            <i class="material-icons" id="new-note" type="button" onClick={() =>{navigate('/NewNote')}}>add_circle</i>
        </>
    );
}



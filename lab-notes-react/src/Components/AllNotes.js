import React, { useState, useEffect } from 'react';
import { logOut } from './Lib/Auth';
import '../StyleSheets/AllNotes.css'; 
import { useNavigate } from 'react-router-dom';
import { collectionRef } from './Lib/FirebaseConfig';
import { getDocs } from "firebase/firestore";
import { deleteNote } from './DeleteNote';

export const Notes = () => 
{
    const [notes, setNotes] = useState([]);
    
    useEffect(() => {
        async function dataNotes() {
            const getNotes = await getDocs(collectionRef);
            setNotes(getNotes.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
        dataNotes();
    }, []);

    const navigate = useNavigate()
    return (
        <div className="container">
            <h1> MyNotes 
            </h1>
            <i class="material-icons" id="exit" onClick={() =>{logOut()}}>exit_to_app</i> 
            <div className="notesContainer">
                <section> 
                    {notes.map((notes) => {
                        return  <article className="all-notes">
                        <section className="note-title"><h3>{notes.title}</h3>
                        <i class="material-icons" id="edit">edit</i>
                        </section>
                        <p className="note-description">{notes.description}</p>
                        <i class="material-icons" id="delete" onClick={() =>{deleteNote(notes.id)}}>delete</i>
                        </article>
                    })}
                </section>
            </div>
            <i class="material-icons" id="new-note" type="button" onClick={() =>{navigate('/NewNote')}}>add_circle</i>
        </div>
    );
}

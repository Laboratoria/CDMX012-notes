import React from "react";
/* Components */
import NavBar from "../NavBar";
import NotesList from "../NotesList";
import ANewNote from "../ANewNote";
import { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
/* Styles */
import "../styles/Notes.css";


function Notes() {

  const [theNotes, setNotes] = useState([]);
  const notesCollectionReference = collection(db, "notesCreated");

  const getNotes = async () => {
    const q = query(notesCollectionReference, orderBy("date", "desc"));
  
    const data = await getDocs(q, {includeMetadataChanges:true});

    setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  useEffect(() => {
    getNotes();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentNote, setCurrentNote] = useState({})
  

  const edit =(note)=>{
    setCurrentNote(note)
  }

  return (
    <>
      <div className="mainContainerNotes">
        <section>
          <img
            className="backgroundImage"
            src="https://i.imgur.com/N9pCgiX.jpg?1"
            alt="bokeh background"
          ></img>
        </section>
        <NavBar />
        {/* Two sections */}

        <section className="twoSectionsContainer">

          {/* Left side */}

          <section className="leftSide">
            <NotesList theNotes= {theNotes} edit={edit}/>
          </section>

          {/* Right side */}
          <section className="rightSide">
          <ANewNote getNotes={getNotes} currentNote={currentNote} />


          </section>
        </section>
      </div>
    </>
  );
}

export default Notes;

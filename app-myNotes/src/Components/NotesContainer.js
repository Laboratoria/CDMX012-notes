import React, {useEffect, useState} from "react";
import { collection, getDocs, query, orderBy} from "firebase/firestore";
import {db} from '../firebase-config'
import '../Components/styleNotesContainer.css'

import '../Components/styleNotesContainer.css'

const NotesContainer =()=>{
  const [notes,setNotes] = useState ([]);

  const colRef = collection(db, "notes");
  const q = query(colRef, orderBy("date", "desc"));
  const docs = [];

  const getNotes = async() =>{
    const onSnapshot = await getDocs(q);
    onSnapshot.forEach((doc) => {
      docs.push ({...doc.data(), id:doc.id});
    });
    setNotes(docs);
  };

  useEffect(() =>{
    getNotes();
    console.log('ue getnotes');
    }
  )

return(
  <div className="getNote_container">
      {
      notes.map((notes) => (
        <div className="printNote_container" key={notes.hour}>
          
          <div className="printNote_body"  ></div>
            <div className="note_tittle">{notes.title}</div>
            <p className="note_text">{notes.note}</p>
            <h6 className="note_date">Modificacion {notes.date}</h6>
        </div>
      ))
}
  </div>
);

};
export default NotesContainer;

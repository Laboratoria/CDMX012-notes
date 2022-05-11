import React from "react";
import { saveNote, toEditNote, deletedNote } from "../firebase-config";
import InputNotes from "../Components/InputNotes";

import "./CreateNote.css";

function CreateNote() {
  return (
    <div className="Create_note_container">
      <InputNotes saveNote={saveNote} toEditNote={toEditNote} deletedNote={deletedNote} />
    </div>
  );
}
export default CreateNote;

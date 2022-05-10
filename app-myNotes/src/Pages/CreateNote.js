import React from "react";
import { saveNote } from "../firebase-config";
import InputNotes from "../Components/InputNotes";

import "./CreateNote.css";

function CreateNote() {
  return (
    <div className="Create_note_container">
      <InputNotes addOrEdit={saveNote} />
    </div>
  );
}
export default CreateNote;

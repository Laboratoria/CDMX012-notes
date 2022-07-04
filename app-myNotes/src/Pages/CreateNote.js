import React from "react";
import {
  saveNote,
  toEditNote,
  saveArchive,
  editArchive,
  deletedNote,
  moveToTrash
} from "../firebase-config";
import InputNotes from "../Components/InputNotes";

import "./CreateNote.css";

function CreateNote() {
  return (
    <div className="Create_note_container">
      <InputNotes
        saveNote={saveNote}
        toEditNote={toEditNote}
        saveArchive={saveArchive}
        editArchive={editArchive}
        deletedNote={deletedNote}
        moveToTrash={moveToTrash}
      />
    </div>
  );
}
export default CreateNote;

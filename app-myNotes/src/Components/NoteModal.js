import React from "react";
import ReactDOM from "react-dom";
import "../Components/styleModalNote.css";
import iconBack from "../Assets/icons/flecha.png";
import iconEdit from "../Assets/icons/editar.png";

function ModalNote({ currentNote, onClose }) {
  if (!currentNote) return null;
  console.log(currentNote);
  return ReactDOM.createPortal(
    <>
      <div className="modal_Overlay" />
      <div className="modal_container">
        <img
          src={iconBack}
          alt=""
          className="iconModal_back"
          onClick={onClose}
        />
        <div className="modal_tittle"> {currentNote.title}</div>
        <div className="modal_note"> {currentNote.note}</div>

        <img
          src={iconEdit}
          alt=""
          className="iconModal_back"
          
        />

        <p className="line"></p>
        <section className="modal_date_container">
          <p className="note_mofifDate" id="modification_date">
            {" "}
          </p>
          <p className="note_Date"> Creación: {currentNote.date}</p>
        </section>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default ModalNote;

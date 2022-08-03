import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/StyleHelpersModals.css";
import iconApunte from "../../Assets/icons/apunte.png";
import iconWork from "../../Assets/icons/trabajo.png";
import iconReminder from "../../Assets/icons/recordatorios.png";
import iconIdeas from "../../Assets/icons/idea.png";

export default function ModalTypeColection({
  openModal,
  setOpenModal,
  setColection,
  note,
  setNote,
}) {
  if (openModal === "colections") {
    const ChangeColections = (selectColection) => {
      setColection(selectColection);
      setNote({ ...note, colection: selectColection });
      setOpenModal(null);
    };

    return ReactDOM.createPortal(
      <>
        <div className="modal_Overlay" />
        <section className="modal_helper_container">
          <div
            className="option"
            onClick={() => {
              ChangeColections("Apuntes");
            }}
          >
            <img src={iconApunte} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Apuntes</div>
          </div>

          <div
            className="option"
            onClick={() => {
              ChangeColections("Trabajo");
            }}
          >
            <img src={iconWork} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Trabajo</div>
          </div>
          <div
            className="option"
            onClick={() => {
              ChangeColections("Recordatorios");
            }}
          >
            <img src={iconReminder} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Recordatorios</div>
          </div>
          <div
            className="option"
            onClick={() => {
              ChangeColections("Ideas");
            }}
          >
            <img src={iconIdeas} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Ideas</div>
          </div>
        </section>
      </>,
      document.getElementById("modal-root")
    );
  }
}

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { DateHour, DateDay } from "./Date";
import { BtnDelete } from "../Components/Buttons";
import "./styleImput.css";
import "./styleActionNotes.css";
import iconSave from "../Assets/icons/guardar.png";
import iconAdd from "../Assets/icons/image.png";
import iconColection from "../Assets/icons/nota-adhesiva.png";

const EditNotesImput = (props) => {
  let Id = localStorage.getItem("noteId");
  const navigate = useNavigate();

  const initialStateVAlues = {
    title: "",
    note: "",
    date: "",
    modif: "Modificación: " + DateHour,
    color: "",
    colection: "",
  };
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState(initialStateVAlues);

  const getNote = async (newNotes) => {
    setLoading(true);
    const snap = await getDoc(doc(db, "notes", Id));

    let data = snap.data();

    setLoading(false);
    setNote(data);
  };

  useEffect(() => {
    getNote();
  }, []);

  /////inputs

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  // boton
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(note);
    navigate("/Home");
  };

  if (loading) {
    return <div>Loading...</div>;
    //  <img className="tenor-gif-embed"  src="https://tenor.com/es/ver/loading-gif-hr-gif-23067502" alt =""/>
    
   
  }else {

  return (
    <div className="input_container">
      <div className="background_notes" />
      {
        <form className="input_section">
          <div className="tittle">
            <input
              className="input_tittle"
              name="title"
              value= {note.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="text_note">
            <textarea
              type="text"
              name="note"
              value= {note.note}
              onChange={handleInputChange}
            />
          </div>
        </form>
      }

      <div className="current_note_date"> {DateDay} </div>

      <section className="action_content">
        <div className="note_colors">
          <div className="text_colors"> Color de la nota </div>
          <section className="color_notes">
            <div name="default" id="gray" className="color"></div>
            <div name="Maldives" id="blue" className="color"></div>
            <div name="Purpink" id="purpure" className="color"></div>
            <div name="Neonlife" id="green" className="color"></div>
            <div name="Neuromancer" id="pink" className="color"></div>
          </section>
        </div>

        <section className="btns_content">
          <div className="btn_actions">
            <img src={iconSave} alt="" className="note_icon" />
            <button className="btn_action" onClick={handleSubmit}>
              {" "}
              Guardar{" "}
            </button>
          </div>

          <div className="btn_actions">
            <img src={iconColection} alt="" className="note_icon" />
            <button name="Apuntes" className="btn_action">
              {" "}
              Agregar a lista{" "}
            </button>
          </div>

          <div className="btn_actions">
            <img src={iconAdd} alt="" className="note_icon" />
            <button className="btn_action"> Agregar imágen </button>
          </div>

          <BtnDelete note = {note} />
        </section>
      </section>
    </div>
  );
    }
};
export default EditNotesImput;

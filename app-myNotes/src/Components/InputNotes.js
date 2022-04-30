import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styleImput.css";
import "./styleActionNotes.css";
import iconSave from "../Assets/icons/guardar.png";
import iconAdd from "../Assets/icons/image.png";
import iconColection from "../Assets/icons/nota-adhesiva.png";
import iconDelete from "../Assets/icons/eliminar.png";

const InputNotes = (props) => {
  const navigate = useNavigate();
  let noteDate = new Date().toDateString();

  const initialStateVAlues = {
    title: "",
    note: "",
    date: noteDate,
    color: "",
    colection: "",
    userId:""
  };
  const [notes, setNotes] = useState(initialStateVAlues);

  /////inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  //boton
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(notes);
    navigate("/Home");
  };

  return (
    <div className="input_container">
      <div className="background_notes" />
      <form className="input_section">
        <div className="tittle">
          <input
            className="input_tittle"
            name="title"
            placeholder="Título"
            onChange={handleInputChange}
          />
        </div>

        <div className="text_note">
          <textarea
            type="text"
            name="note"
            placeholder="Nota"
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="current_note_date"> {noteDate} </div>

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

          <div className="btn_actions">
            <img src={iconDelete} alt="" className="note_icon" />
            <button className="btn_action"> Eliminar </button>
          </div>
        </section>
      </section>
    </div>
  );
};
export default InputNotes;
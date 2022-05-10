import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDates, DateHour, DateDay } from "./Date";
import "./styleImput.css";
import "./styleActionNotes.css";
import iconSave from "../Assets/icons/guardar.png";
import iconAdd from "../Assets/icons/image.png";
import iconColection from "../Assets/icons/nota-adhesiva.png";
import iconDeleteGray from "../Assets/icons/eliminarGray.png";

const InputNotes = (props) => {
  const navigate = useNavigate();

  const initialStateVAlues = {
    title: "Título",
    note: "Nota",
    date: getDates,
    create: "Creación: " + DateHour,
    color: "gray",
    colection: "apuntes",
  };
  const [notes, setNotes] = useState(initialStateVAlues);
  const [themeColor, setThemeColor] = useState();

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

  //boton 
  const handleChangeColor = (color) => {
    setThemeColor(color);
    setNotes({ ...notes, color: color });
  };

  return (
    <div className="input_container ">
      <div className={`background_notes ${themeColor}`} />
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
      <div className="current_note_date"> {DateDay} </div>

      <section className="action_content">
        <div className="note_colors">
          <div className="text_colors"> Color de la nota </div>

          <section className="color_notes">
            <div
              id="color"
              className="gray"
              onClick={() => handleChangeColor("gray")}
            ></div>
            <div
              id="color"
              className="Maldives"
              onClick={() => handleChangeColor("Maldives")}
            ></div>
            <div
              id="color"
              className="Purpink"
              onClick={() => handleChangeColor("Purpink")}
            ></div>
            <div
              id="color"
              className="Neonlife"
              onClick={() => handleChangeColor("Neonlife")}
            ></div>
            <div
              id="color"
              className="Neuromancer"
              onClick={() => handleChangeColor("Neuromancer")}
            ></div>
          </section>
        </div>

        <section className="btns_content">
          <div className="btn_actions">
            <img src={iconSave} alt="" className="note_icon" />
            <button className="btn_action" onClick={handleSubmit}>
              Guardar
            </button>
          </div>

          <div className="btn_actions">
            <img src={iconColection} alt="" className="note_icon" />
            <button name="Apuntes" className="btn_action">
              Agregar a lista
            </button>
          </div>

          <div className="btn_actions">
            <img src={iconAdd} alt="" className="note_icon" />
            <button className="btn_action"> Agregar imágen </button>
          </div>

          {true ? (
            <div className="btn_action_delete">
              <img src={iconDeleteGray} alt="" className="note_icon" />
              <button className="btn_actionDelete"> Eliminar </button>
            </div>
          ) : undefined}
        </section>
      </section>
    </div>
  );
};
export default InputNotes;

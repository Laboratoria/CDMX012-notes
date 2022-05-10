import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getDates, DateHour, DateDay } from "./Date";
import "./styleImput.css";
import "./styleActionNotes.css";
import { BtnBack } from "../Components/Buttons";
import iconNote from "../Assets/icons/apunte.png";
import iconSave from "../Assets/icons/guardar.png";
import iconAdd from "../Assets/icons/image.png";
import iconColection from "../Assets/icons/nota-adhesiva.png";
import iconDeleteGray from "../Assets/icons/eliminarGray.png";

const InputNotes = (props) => {
  const navigate = useNavigate();

  ///// valores iniciales de la nota
  const initialStateVAlues = {
    title: "Título",
    note: "Nota",
    date: getDates,
    create: "Creación: " + DateHour,
    color: "gray",
    colection: "apuntes",
  };

  ///// valores de la coleccion
  const ColectionOptions = [
    { value: "apuntes", label: "Apuntes" },
    { value: "trabajo", label: "Trabajo" },
    { value: "recordatorios", label: "Recordatorios" },
    { value: "ideas", label: "Ideas" },
  ];

  /////setea los valores a guardar
  const [notes, setNotes] = useState(initialStateVAlues);
  /////setea los valores de coleccion a guardar
  const [colection, setColection] = useState("apuntes");
  /////set del color de la nota
  const [themeColor, setThemeColor] = useState();

  /////inputs valores a editar
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotes({ ...notes, [name]: value });
  };

  // boton guardar con funcion saveNotes
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(notes);
    navigate("/Home");
  };
  //botones colores
  const handleChangeColor = (color) => {
    setThemeColor(color);
    setNotes({ ...notes, color: color });
  };

  //select valor colecciones
  const ChangeColections = (value) => {
    setColection(value);
    console.log(value);
  };

  return (
    <div className="input_container ">
      <div className={`background_notes ${themeColor}`} />
      
      <div className="header_container">
        <img src={iconNote} alt="" className="icon_create_note" />
        <div className="note_colection"> Apuntes </div>
        <BtnBack />
        </div>

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
       
            <Select className="select_colections"
            options={ColectionOptions} 
            value = {colection}
            onChange={ChangeColections} />

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

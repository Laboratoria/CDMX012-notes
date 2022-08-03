import React, { useState } from "react";
import ListColection from "../Components/ListColection";
import "../Components/styles/styleColections.css";
import iconApunte from "../Assets/icons/apunte.png";
import iconWork from "../Assets/icons/trabajo.png";
import iconReminder from "../Assets/icons/recordatorios.png";
import iconIdeas from "../Assets/icons/idea.png";
import iconArchived from "../Assets/icons/papelera.png";
import iconTrash from "../Assets/icons/archivado.png";

function Colections({setFlagFalse, flag}) {
   /////setea con la coleccion seleccionada para renserizado condicional
  const [handleColection, setHandleColection] = useState("menuColections");

   ///// hace renderizado condicional en main 
  const handleSetColection = () => {
      return <ListColection selectedColection = {handleColection} />
  };

  // hace set de la coleccion seleccionada y entra la funcion de comunicacion con el padre nav
  const setColection = (currentColection) => {
    setFlagFalse();
    setHandleColection(currentColection);
};

  const MenuColection = () => {
    return (
      <section className="set_colections_content">

        <div className="colection_style">
          <img src={iconApunte} alt="" className="colection_icon" />
          <button
            className="btn_colection"
            onClick={() => setColection("Apuntes")}
          >
            Apuntes
          </button>
        </div>

        <div className="colection_style">
          <img src={iconWork} alt="" className="colection_icon" />
          <button className="btn_colection" 
          onClick={() => setColection("Trabajo")}
          > Trabajo </button>
        </div>

        <div className="colection_style">
          <img src={iconReminder} alt="" className="colection_icon" />
          <button className="btn_colection"
          onClick={() => setColection("Recordatorios")}
          > Recordatorios </button>
        </div>

        <div className="colection_style">
          <img src={iconIdeas} alt="" className="colection_icon" />
          <button className="btn_colection"
          onClick={() => setColection("Ideas")}
          > Ideas </button>
        </div>

        <section className="deleted_notes_content">

          <div className="colection_style" id="btn_shade">
            <img src={iconArchived} alt="" className="colection_icon"/>
            <button className="btn_colection" id="shade" onClick={() => setColection("Archivado")}>
              {" "}
              Notas archivadas{" "}
            </button>
          </div>

          <div className="colection_style" id="btn_shade">
            <img src={iconTrash} alt="" className="colection_icon" />
            <button className="btn_colection" id="shade" onClick={() => setColection("Papelera")}>
              {" "}
              Papelera{" "}
            </button>
          </div>
        </section>
      </section>
    );
  };

  return (
    <div className="colections_content">
      {
        flag ? MenuColection() : handleSetColection()
      }
    </div>
  );
}
export default Colections;

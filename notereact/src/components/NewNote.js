import React from "react";
import { Header } from "./Header";
// Componente para crear nota nueva, contiene header, y componente newnote (nota y boton guardar Savenote)
function NewNote () {
    return (
        <div>
            <Header></Header>
            <input ></input>
            <button>Guardar</button>

        </div>
    )
}
export {NewNote};
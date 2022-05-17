
import { useNavigate } from "react-router-dom";
function NewNote (){
    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/home");
    }
    return ( 
    <div>
        <input></input>
        <button onClick={loginClick} placeholder = {'Escribe tu nota'} >Guardar</button>

    </div>
    )
}

export default NewNote;
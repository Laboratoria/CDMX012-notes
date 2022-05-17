
import { useNavigate } from "react-router-dom";

function WriteNote (){

    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/createNote");
    }
    return(

        <button onClick={loginClick}>Crear nota</button>
    )
}

export default WriteNote;
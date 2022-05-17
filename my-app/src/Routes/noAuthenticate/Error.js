import {useNavigate} from 'react-router-dom';
function DisplayNote () {

    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/");
    }
    return (
        <div>
         <h2>Error la página no existe</h2>
         <button onClick={loginClick}>Ir a inicio</button>
        </div>
    )
}
export default DisplayNote;

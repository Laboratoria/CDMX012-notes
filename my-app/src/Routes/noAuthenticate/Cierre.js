import {useNavigate} from 'react-router-dom';
import { H2, Button } from './Cierrestyles';
function Cierre () {

    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/");
    }
    return (
        <div>
         <H2>Cerraste sesión</H2>
         <Button onClick={loginClick}>Ir a inicio</Button>
        </div>
    )
}
export default Cierre;

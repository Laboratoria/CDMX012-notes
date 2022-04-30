import { useNavigate } from 'react-router-dom';
import { auth, signOut} from '../firebase-config';
import iconLogOut from '../Assets/icons/logout.png'

 function BtnLogOut() {
  const navigate = useNavigate();
  function logOut() {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  }
  return (
    <img src= {iconLogOut} alt= '' className='icon_notes' onClick={logOut}/>
  );
}

export default BtnLogOut;
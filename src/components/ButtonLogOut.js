import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import './ButtonLogOut.css';

export default function ButtonLogOut() {
  const navigate = useNavigate();
  function logOut() {
    signOut(auth)
      .then(() => navigate('/login'))
      .catch((error) => console.log(error));
  }

  return (
    <button className='btn__logout' onClick={logOut}>
      <img src='./assets/Log_Out.svg' alt='' />
    </button>
  );
}

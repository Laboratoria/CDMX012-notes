import './Page404.css';
import error404 from '../../resource/error404.png';
import { useNavigate } from 'react-router-dom';
function Page404() {

  const navigate = useNavigate()
  function handleClick () {
    navigate('/');
  }
  return (
    <div className='errorContainer'>
      <img src={error404} className='errorLogo' alt='Error Logo' />
      <button className='goBackbtn' onClick={handleClick}>Ir al inicio</button>
    </div>
  );
}

export default Page404;
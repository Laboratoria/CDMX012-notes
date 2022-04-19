import '../globalStyles.css';
import './Dashboard.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ButtonLogOut from '../components/ButtonLogOut';

export default function Dashboard() {
  const navigate = useNavigate();

  //se ejecuta al camiar esta o renderiza por primera vez
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
  });

  return (
    <section className='container_dashboard'>
      <div className='dashboard__container'>
        <div className='heroDashboard'>
          <ButtonLogOut></ButtonLogOut>
        </div>
        <div className='dashboard'>
          <div className='dashboard__title'>
            <img src='./assets/estrellita.svg' alt='' />
            <h1 className='dashboard__title--text'>Mi Espacio</h1>
            <img src='./assets/estrellita.svg' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

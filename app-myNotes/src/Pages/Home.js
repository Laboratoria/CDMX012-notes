import React  from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuth } from '../firebase-config'
import './Home.css';
import NotesContainer from '../Components/NotesContainer'
import BtnLogOut from '../Components/LogOut'
import logoN from "../Assets/logo/LogoN.png"
import iconSearch from '../Assets/icons/lupa.png'
import iconNote from '../Assets/icons/nota-adhesiva.png'
import iconColections from '../Assets/icons/colecciones.png'
import iconHome from '../Assets/icons/casa.png'
import iconAdd from '../Assets/icons/addBtn.png'


function HomePage () {
  const User= useAuth();
  const name =  User?.displayName.split(" ")[0];
  // const UserImage = User?.photoURL;
  let date = new Date().toDateString();
  const navigate = useNavigate();

  const BtnCreateNote = ()=>{
    navigate('/CreateNote');
   };
  


  return (
    <>
    <header className= "header"> 
      <img src= {logoN} alt="Logo" className= "logo_n"/>
      <div className= 'info_container'> 
        <div className="user_name"> ¡Hola {name}!  </div> 
        <div className= "current_date"> {date}  </div>
        {/* <img src = {UserImage} alt='' className="user_img"/> */}
      </div>
      
      <div className="input_search">
        <input type="text" search="text" placeholder="Buscar nota" />
        <img src= {iconSearch} alt="" className="search_icon"/>
      </div>

    </header> 

    <nav className='nav_menu' >
      <section className='all_notes_cont'>
        <img src={iconNote} alt="" className='icon_notes'/>
        <div className='all_notes'>Todas las notas </div>
      </section>

      <section className='colections_cont'>
        <img src={iconColections} alt="" className='icon_notes'/>
        <div className='colections'>Colecciones</div>
      </section>
    </nav>

    <section className='notes_section'>
      <NotesContainer/>
    </section>

    <div className='footer_menu'>
    <img src= {iconHome} alt= '' className='icon_notes'/>
    <img src= {iconAdd} alt= '' className='icon_add' onClick={BtnCreateNote}/>
    <BtnLogOut/>
    </div>

    </>
  )
}
export default HomePage;

  /* <img className= "userPhoto" alt ="" /> */
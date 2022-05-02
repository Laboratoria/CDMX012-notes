import '../App.css';

export function LogOut() {

    /*const navigate = useNavigate();
  
    const signInWithGoogle = () => {
    
      signInWithPopup(auth, provider)
        .then((result) => {
        navigate('/Notes')
        //console.log(result)
      }).catch((error) => {
        console.log(error)
    });
    } */
  
      return (
        <div className="logout-button"> 
          <button className="btn-logout">Log Out</button>
        </div>
      );
    }
    export default LogOut;

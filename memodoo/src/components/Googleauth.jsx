import '../App.css';
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../auth/Auth';

export function GoogleSignIn() {

  const googleSignIn = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/Notes')
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div className="intro-buttons"> 
        <button className="btn-register" onClick={handleGoogleSignIn}>Log In with Google</button>
      </div>
    );
  }
  export default GoogleSignIn;
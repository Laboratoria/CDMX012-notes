import React from 'react';
import '../App.css';
import { UserAuth } from '../auth/Auth';
import { Link, useNavigate } from 'react-router-dom';

export function LogOut() {

  const {user, logOut} = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate ('/')
    } catch (error) {
      console.log (error)
    }
  }
      return (
        <div className="logout-button">
           {user?.displayName ?  <button onClick={handleSignOut} className="btn-logout">Log Out</button> : <Link to ='/'>Back to Home</Link>}
        </div>
      );
    }
    export default LogOut;

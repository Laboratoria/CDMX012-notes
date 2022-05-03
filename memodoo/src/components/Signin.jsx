import React from 'react';
import logo from '../img/logos/logo-white-h.svg';
import GoogleSignIn from './Googleauth';
//import { UserAuth } from '../context/AuthContext';
import '../App.css';

export function SignIn() {

  return (
    <div className="Signin">
      <section className="Signin-header">
        <img src={logo} className="logo-vertical" alt="logo-vertical" />
        <h2>
        Welcome back!
        </h2>
        <form className = "signinform">
            <input type="email" id="email" name="lname" placeholder="Email"></input>
            <input type="password" id="password" name="lname" placeholder="Password"></input>
            <button>Continue with Email</button>
        </form>
        <p>Or</p>
        <GoogleSignIn/>
      </section>
    </div>
  );
};

export default SignIn;

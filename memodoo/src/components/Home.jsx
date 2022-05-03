import React from 'react';
import logo from '../img/logos/logo-white-v.svg';
import GoogleSignIn from './Googleauth';
import '../App.css';

export function Home()
{
    return (
        <div className="Home">
            <section className="Home-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                Never forget a thing!
                </h1>
                <section className="Home-content">
                    <p>
                    Memodoo is a simple app to take notes for boosting your creative and productive self.
                    </p>
                    <GoogleSignIn/>
                </section>
            </section>
        </div>
    );
}

export default Home;
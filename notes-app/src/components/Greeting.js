/* import React from 'react'
import "./styles/Greeting.css"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebaseConfig'


function Greeting() {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const displayName = user.displayName || "";
            const photoURL = user.photoURL;
            console.log(`Saludando=${displayName}`);
        }
    })

  return (
    <section className="UserNameAndPhoto" >
        <section className="photoGoogle">       </section>
        <section className="helloText">
            <h2> </h2>
            </section>

    </section>
  )
}

export default Greeting */
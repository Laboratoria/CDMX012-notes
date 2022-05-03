import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    //createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged,
    signOut,
     } from 'firebase/auth'

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    useEffect (()=> {
        const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
            setUser(currentUser)
            console.log('user', currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])

      /*CreateUserwithEmailandPassword
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }*/

    //Log Out Function for later
    /*export const logOut = () => {
        signOut(auth)
    }*/

    return (
        <>
        <AuthContext.Provider value={googleSignIn}>
            {children}
        </AuthContext.Provider>
        </>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext)
};
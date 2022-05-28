import { auth } from './FirebaseConfig';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider)
    .then((re) => {
        const credential = GoogleAuthProvider.credentialFromResult(re);
    })
    .catch((err) => {
        console.log(err)
    }); 

export const logOut = () => signOut(auth).then(() => {
    }).catch((err) => {
    });
 

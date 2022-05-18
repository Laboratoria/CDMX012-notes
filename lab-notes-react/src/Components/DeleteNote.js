import { deleteDoc, doc } from "firebase/firestore";
import { db } from './Lib/FirebaseConfig';


export const deleteNote = async (id) => { 
    const userDoc = doc(db, 'myNotes', id);
    await deleteDoc(userDoc);
}
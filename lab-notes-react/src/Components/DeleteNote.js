import { deleteDoc, doc } from "firebase/firestore";
import { db } from './Lib/FirebaseConfig';

export const deleteNote = async (id) => { 
    const userDoc = doc(db, 'myNotes', id);
    if (window.confirm('Are you sure you want to delete the note?')) {
    await deleteDoc(userDoc);
}
};
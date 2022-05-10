import './MakeNote.css';
import { useState } from 'react';
import { addDoc, collection } from '../../firebase-store/firebase-imports';
import { auth,db } from '../../firebase-store/firebaseKeys';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout-component/Header';

function MakeNote({handleExit, UserInfo}) {

const [ title, setTitle ] = useState('')
const [ note, setNote ] = useState('')
const navigate = useNavigate();

// const notesCollectionRef = collection(db, "notes");

const createNote = async () => {
  await addDoc(collection(db, 'users', auth.currentUser.uid, 'notes'), {
  title,
  note,
  author: auth.currentUser.displayName,
  id: auth.currentUser.uid,
})
navigate('/')
};


const handleChangeTitle = (e)=> {
setTitle(e.target.value)
}
const handleChangeNote = (e)=> {
setNote(e.target.value)
}


  return (
    <div className='makeNotePage'>
      <Header handleExit={handleExit}UserInfo= { UserInfo}></Header>
      <h1>Create your note</h1>
      <label>Title:</label>
      <input 
      className='inputNotes'
      type='text'
      name='makeNoteTitle'
      id='makeNoteTitle'
      placeholder='Ex. Laundry'
      onChange={handleChangeTitle}
      />
      
      <label>Note:</label>
      <textarea 
      className='inputNotes'
      type='text'
      name='makeNoteContent'
      id='makeNoteContent'
      placeholder='Ex. Dont forget to pick up the laundry before 6 pm'
      onChange={handleChangeNote}
      />
      <button className='buttonsStyles' onClick={createNote}>Publish</button>
      <button className='buttonsStyles' onClick={()=>{navigate('/')}}>Cancel</button>

      
    </div>
  );
}

export default MakeNote;
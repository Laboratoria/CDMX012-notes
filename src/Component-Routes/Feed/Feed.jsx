/* eslint-disable react/jsx-key */
import './Feed.css'
import addSign from '../../resource/addSign.png';
import Pencil from '../../resource/Pencil.png';
import Trash from '../../resource/Trash.png'
import { useEffect, useState} from 'react';
import { collection, onSnapshot} from '../../firebase-store/firebase-imports';
import { db, auth } from '../../firebase-store/firebaseKeys';
import { useNavigate } from 'react-router-dom';
import Header from '../Layout-component/Header';
import DeleteNote from '../DeleteNote';


function Feed({handleExit, UserInfo}) {
  const navigate = useNavigate();

  const [ noteList , setNoteList] = useState([]);

  const getNotes = async () => {
    onSnapshot(collection(db, 'users', auth.currentUser.uid, 'notes'), (querySnapShot) => {
      const documents = [];
      querySnapShot.forEach(note => {
        documents.push({...note.data(), id: note.id});
      });
    setNoteList(documents)
    });
  };

  useEffect(() => {
    getNotes()
  }, []);

  
  

  return (
    <div className='feedPage'>
      <Header handleExit={handleExit} UserInfo={UserInfo}></Header>
      <div className='notesContainer'>
        {noteList.map((post)=> {
          return <section className='noteContainer' key={post.id}>
          <h1 className='noteTitle'>{post.title}</h1>
          <p className='noteContent'>{post.note}</p>
          <p className='noteAuthor'>Author:{post.author}</p>
          <section className='btnSection'>
        <button className='editButton' onClick={() => {DeleteNote()}}>
        <img src={Pencil} className='editImgBtn' alt='Editbtn' />
        </button>
        <button className='eraseButton' onClick={() => {DeleteNote(post.id)}}>
        <img src={Trash} className='eraseImgBtn' alt='Erasebtn' />
        </button>
        </section>
          </section>;
      })};
      </div>

      <button className='addNoteBtn' onClick={()=> {navigate('/MakeNote')}}>
      <img src={ addSign } className='addBtn' alt='addBtn' />
      </button>
    </div>
  );
}

export default Feed;
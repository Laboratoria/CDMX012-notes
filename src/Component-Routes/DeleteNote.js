import Swal from 'sweetalert2'
import {doc, deleteDoc} from '../firebase-store/firebase-imports';
import { db, auth } from '../firebase-store/firebaseKeys';

function DeleteNote(id) {

const deleteNote = async (id) =>{
    await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'notes',id))
  }

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#2a324b',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!',
  width: '350px',
}).then((result) => {
  if (result.isConfirmed) {
    deleteNote(id)
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
}
export default DeleteNote
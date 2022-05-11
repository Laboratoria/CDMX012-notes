import Header from "../Components/Header";
import Note from "../Components/Note";
import NoteEdit from '../Components/NoteEdit';
import NoteDelete from '../Components/NoteDelete';
/* Tengo que poener los botones de borrar y editar dentro de nota  */

function DisplayNote () {
    return (
        <div>
            <Header/>
            <Note/>
            <NoteEdit/>
            <NoteDelete/>
            
        </div>
    )
}
export default DisplayNote;
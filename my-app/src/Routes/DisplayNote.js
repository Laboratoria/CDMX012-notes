import Header from "../Components/Header";
import Note from "../Components/Note";
import NoteEdit from '../Components/NoteEdit';
import NoteDelete from '../Components/NoteDelete';

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
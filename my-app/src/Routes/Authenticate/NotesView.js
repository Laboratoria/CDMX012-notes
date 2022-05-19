import Header from "../../Components/Header";
import Note from "../../Components/Note";
import OpenNote from "../../Components/OpenNote";
import WriteNote from "../../Components/WriteNote";

function NotesView () {
    return (
        <div>
            <Header/>
            <WriteNote/>
            <Note/>
            <OpenNote/>
        </div>
    )
}
export default NotesView;
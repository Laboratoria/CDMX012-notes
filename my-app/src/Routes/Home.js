import Header from "../Components/Header";
import NewNote from "../Components/Newnote";

function Home () {
    return (
        <div>
            <Header/>
            <NewNote/>
            {/* Aqui faltaria comprobar si el usuario ya tiene notas entonces que se muestren y si no sera en blanco con con un nuevo usuario  */}
            
        </div>
    )
}
export default Home;
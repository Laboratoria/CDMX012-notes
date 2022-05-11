import Header from "../Components/Header";
import WriteNote from "../Components/WriteNote";

function Home () {
    return (
        <div>
            <Header/>
            <WriteNote/>
            {/* Aqui faltaria comprobar si el usuario ya tiene notas entonces que se muestren y si no sera en blanco con con un nuevo usuario  */}
            
        </div>
    )
}
export default Home;
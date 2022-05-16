import React, {useState} from "react";
import "../styles/Notes.css";
import "../styles/Button.css";
import { FiLogOut } from "react-icons/fi";
import NotesList from "../NotesList"


function Notes({ logOut }) {
  return (
    <>
    <div className="mainContainerNotes">
        <section>
          <img
            className="backgroundImage"
            src="https://i.imgur.com/N9pCgiX.jpg?1"
            alt="bokeh background"
          ></img>
        </section>

        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>

        <section className="twoSectionsContainer">
        <button>+</button>

{/* Left side */}
          <section className="leftSide">
          <section><h1><u>My Notes</u></h1></section>
{/* Use state es un array que devuelve 2 propiedades:
1. El estado en si 
2. la función que hace modificastatusr ese estado */}
          {/*const [allNotes, setAllNotes] = useState([
          {{id:1, note: "My first note", completed: false }},
          ]);
           <NotesList allNotes={allNotes}></NotesList>; */}
          </section>

{/* Right side */}
          <section className="rightSide">
          <section><h1><u>My Notes</u></h1></section>
          <button>Edit</button>
          <button>Delete</button>
          
          <input className="newNoteText" type="text" placeholder="Write your note here"></input>


          </section>
        </section>
        </div>
    </>
  );
}

/* function Notes(logOut) {
  return (
    <>
      <div className="mainContainerNotes">
        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>

        <section className="twoSectionsContainer">
        

          <section className="leftSide">
          <section><h1><u>My Notes</u></h1></section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus faucibus mauris, ac tempus massa imperdiet nec. Vestibulum
              congue tincidunt lectus a porttitor. Maecenas sed orci commodo,
              ultrices lectus vulputate, ultrices lorem. Morbi eleifend
              porttitor tempus. Sed id lectus mattis, aliquam ligula rutrum,
              ullamcorper risus. Nam luctus fringilla eros, tempus rhoncus lorem
              aliquam vitae. Nullam finibus ante eget fringilla elementum.
              Integer vitae mauris ac erat mattis pretium. Nullam porta elit
              ipsum, sed volutpat dui porta in. Ut vitae ultrices lacus, ut
              finibus dui. Ut nec fringilla dui. In dictum hendrerit quam, id
              rutrum nisi elementum sed. In sed elementum tortor. Fusce aliquam
              at orci efficitur pretium. Pellentesque fermentum dictum nibh, vel
              imperdiet enim vestibulum non. Morbi viverra egestas aliquam. In
              feugiat mi at suscipit elementum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus faucibus mauris, ac tempus massa imperdiet nec. Vestibulum
              congue tincidunt lectus a porttitor. Maecenas sed orci commodo,
              ultrices lectus vulputate, ultrices lorem. Morbi eleifend
              porttitor tempus. Sed id lectus mattis, aliquam ligula rutrum,
              ullamcorper risus. Nam luctus fringilla eros, tempus rhoncus lorem
              aliquam vitae. Nullam finibus ante eget fringilla elementum.
              Integer vitae mauris ac erat mattis pretium. Nullam porta elit
              ipsum, sed volutpat dui porta in. Ut vitae ultrices lacus, ut
              finibus dui. Ut nec fringilla dui. In dictum hendrerit quam, id
              rutrum nisi elementum sed. In sed elementum tortor. Fusce aliquam
              at orci efficitur pretium. Pellentesque fermentum dictum nibh, vel
              imperdiet enim vestibulum non. Morbi viverra egestas aliquam. In
              feugiat mi at suscipit elementum.
            </p>
          </section>
          <section className="rightSide">
          <section><h1><u>My Notes</u></h1></section>
             <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus faucibus mauris, ac tempus massa imperdiet nec. Vestibulum
              congue tincidunt lectus a porttitor. Maecenas sed orci commodo,
              ultrices lectus vulputate, ultrices lorem. Morbi eleifend
              porttitor tempus. Sed id lectus mattis, aliquam ligula rutrum,
              ullamcorper risus. Nam luctus fringilla eros, tempus rhoncus lorem
              aliquam vitae. Nullam finibus ante eget fringilla elementum.
              Integer vitae mauris ac erat mattis pretium. Nullam porta elit
              ipsum, sed volutpat dui porta in. Ut vitae ultrices lacus, ut
              finibus dui. Ut nec fringilla dui. In dictum hendrerit quam, id
              rutrum nisi elementum sed. In sed elementum tortor. Fusce aliquam
              at orci efficitur pretium. Pellentesque fermentum dictum nibh, vel
              imperdiet enim vestibulum non. Morbi viverra egestas aliquam. In
              feugiat mi at suscipit elementum.
            </p></section>
        </section>
      </div>
    </>
  );
} */

//BOTÓN DE LOGOUT QUE FUNCIONA

/* function Notes({ logOut }) {
  return (
    <>
        <section>
          <img
            className="backgroundImage"
            src="https://i.imgur.com/N9pCgiX.jpg?1"
            alt="bokeh background"
          ></img>
        </section>
        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>

        <section className="mainContainerNotes">
          <section className="leftSide"></section>
          <section className="rightSide"></section>
        </section>
    </>
  );
} */


/* function Notes({ logOut }) {
  return (
    <>
      <div className="mainContainerNotes">
        <section>
          <img
            className="backgroundImage"
            src="https://i.imgur.com/N9pCgiX.jpg?1"
            alt="bokeh background"
          ></img>
        </section>
        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>

        <section className="mainContainerNotes">
          <section className="leftSide"></section>
          <section className="rightSide"></section>
        </section>
      </div>
    </>
  );
}  */

export default Notes;

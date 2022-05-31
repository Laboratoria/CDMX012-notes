import React from "react";


// const Note = () => {
//     useEffect (()=>{
//     onSnapshot(q, (querySnapshot) => {
//     const data = [];
//     querySnapshot.forEach((doc) => {
//       const nota = {
//         titulo: doc.data().titulo,
//         descripcion: doc.data().descripcion
//       }
//         data.push(nota);
//     });
//     setDatalist(data)
//   }) 
// },[])
 
// const [datList, setDatalist]= useState (null)  
// return(
//     <div>
      
//                     {/* {datList && datList.map((allData)=> <textarea>{allData.titulo}</textarea>)} */}
//                     {datList && datList.map((allData)=> (
//                       <div>
//                         <form className='form-note'>
//                         <input value={allData.titulo}></input>
//                         <input value={allData.descripcion}></input>
//                         </form> 
//                       </div>
//                     ))}
//                     {/* <textarea id="note"value={}></textarea> */}

const NoteDelete = ()=> (
    <button>Borrar</button>
)

export default NoteDelete;
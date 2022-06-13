let note = null;

//llama al valor  nota
export const getNoteState =()=> note ;


//actualiza el valor de la nota 
export const upDateNoteState =(noteUpDate)=>{
    note = noteUpDate
}


//limpia al valor  la nota 

export const cleanNoteState = ()=> note = null;





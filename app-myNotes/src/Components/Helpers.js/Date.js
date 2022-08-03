export let getDates = new Date();

let day = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let get_hour = getDates.getHours() + ":" + getDates.getMinutes();


export const DateHour = day[getDates.getDay()] + " " + getDates.getDate() + " de " + month[getDates.getMonth()]+ "  " + getDates.getFullYear() +" ; " + get_hour;

export const DateDay = day[getDates.getDay()] + " " + getDates.getDate() + " de " + month[getDates.getMonth()]+ "  " + getDates.getFullYear(); 
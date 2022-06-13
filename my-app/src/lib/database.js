import { collection, orderBy, query} from "firebase/firestore";
import { authentication, db } from "./firebaseConfig";

const ema= authentication.currentUser;
console.log(ema)
export const q = query(collection(db, "notes"), orderBy('date', 'desc'));


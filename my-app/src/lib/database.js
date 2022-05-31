import { collection, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const q = query(collection(db, "notes"));


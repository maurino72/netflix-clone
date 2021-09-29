import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXvhaJiPEJtfCxig62P4Z9wBqOAMOEUWg",
  authDomain: "netflix-clone-79c2a.firebaseapp.com",
  projectId: "netflix-clone-79c2a",
  storageBucket: "netflix-clone-79c2a.appspot.com",
  messagingSenderId: "798801127803",
  appId: "1:798801127803:web:dc3dfdd6a4e817ec1a35de"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;

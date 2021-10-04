// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  getAuth,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkPywARUc7VCzJgXfGV7FBVE8ZgnIQP7Q",
  authDomain: "reactcourse-dd00b.firebaseapp.com",
  projectId: "reactcourse-dd00b",
  storageBucket: "reactcourse-dd00b.appspot.com",
  messagingSenderId: "551378979959",
  appId: "1:551378979959:web:c627f210fcf60655bcca72",
  measurementId: "G-TYXK6H1BCJ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const signOut = async () => {
  await firebaseSignOut(auth);
};

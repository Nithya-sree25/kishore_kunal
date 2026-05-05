// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANuCuMvP3sJKZTYke40bIva_C3T4TyTiA",
  authDomain: "kishorkunalportfolio.firebaseapp.com",
  projectId: "kishorkunalportfolio",
  storageBucket: "kishorkunalportfolio.firebasestorage.app",
  messagingSenderId: "674075043901",
  appId: "1:674075043901:web:64a2a5a6e1931ce327a254",
  measurementId: "G-5V30SWZ86V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
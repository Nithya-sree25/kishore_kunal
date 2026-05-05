// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG6A4VY22KJkMMkHyxveUJ2H1WfUUI1uw",
  authDomain: "kalaivani-publicationportfolio.firebaseapp.com",
  projectId: "kalaivani-publicationportfolio",
  storageBucket: "kalaivani-publicationportfolio.firebasestorage.app",
  messagingSenderId: "19308691789",
  appId: "1:19308691789:web:8be90f2b33957f49607704",
  measurementId: "G-ZF56V3T2P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
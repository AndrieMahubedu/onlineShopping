// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEgEPyCO1KjOMtFuveHhsKlxJd5G28hSE",
  authDomain: "onlineshoppingapp-ce479.firebaseapp.com",
  projectId: "onlineshoppingapp-ce479",
  storageBucket: "onlineshoppingapp-ce479.appspot.com",
  messagingSenderId: "1082968294311",
  appId: "1:1082968294311:web:52f2103ef4c27b412dec82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 
export default db
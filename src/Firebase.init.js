// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDStHbM0pGNpzH_lYiEGR7RDGmUWsBvdSc",
  authDomain: "crypto-cafe-81d16.firebaseapp.com",
  projectId: "crypto-cafe-81d16",
  storageBucket: "crypto-cafe-81d16.appspot.com",
  messagingSenderId: "867178812180",
  appId: "1:867178812180:web:2292355c67d0e68e2ae801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
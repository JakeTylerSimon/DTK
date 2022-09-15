import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  };

let app
let auth

if (typeof window !== "undefined") {
    app = app || initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
  
  export { auth, onAuthStateChanged };
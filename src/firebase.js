// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0vLtKH_Wnc0rRsAlmWbCSRZB-Ei0gGIU",
    authDomain: "login-57c5f.firebaseapp.com",
    projectId: "login-57c5f",
    storageBucket: "login-57c5f.firebasestorage.app",
    messagingSenderId: "555614798702",
    appId: "1:555614798702:web:76a4d55a7c4027356b777f"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

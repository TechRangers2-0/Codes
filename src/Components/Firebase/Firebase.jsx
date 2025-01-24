// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDDiKBWDzNS620lVRy_xNBqDko-sAyv6wE",
  authDomain: "edutrack-dc2af.firebaseapp.com",
  projectId: "edutrack-dc2af",
  storageBucket: "edutrack-dc2af.firebasestorage.app",
  messagingSenderId: "266542550009",
  appId: "1:266542550009:web:e68aebfae218c5fe218b28"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
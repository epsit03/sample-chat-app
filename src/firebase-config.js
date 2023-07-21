// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRdCStVYIXrLbOXFSQ4kQUVweoYSIssx0",
  authDomain: "samplechatapp-17cb0.firebaseapp.com",
  projectId: "samplechatapp-17cb0",
  storageBucket: "samplechatapp-17cb0.appspot.com",
  messagingSenderId: "765796820834",
  appId: "1:765796820834:web:75ba27c9d6a51323d46e3b",
  measurementId: "G-XPRT27HB6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export const db = getFirestore(app);

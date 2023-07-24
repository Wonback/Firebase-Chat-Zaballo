// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtnk7LK3X3cfv_jGO5mV8SMcqRuNxvwNA",

  authDomain: "react-super-chat-zaballo.firebaseapp.com",

  projectId: "react-super-chat-zaballo",

  storageBucket: "react-super-chat-zaballo.appspot.com",

  messagingSenderId: "653788284464",

  appId: "1:653788284464:web:27bf7c2f1f66dd6e05cff5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//conexion a la database
export const database = getFirestore(app);

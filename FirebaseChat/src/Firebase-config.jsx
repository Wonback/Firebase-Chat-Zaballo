// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyVDZMeYIuAfixtWPjdEyMuFJCianf70",
  authDomain: "superchatwithreact-zaballo.firebaseapp.com",
  projectId: "superchatwithreact-zaballo",
  storageBucket: "superchatwithreact-zaballo.appspot.com",
  messagingSenderId: "724296915978",
  appId: "1:724296915978:web:719b28c38632b25a3413f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrmN-NmdkoOocuyLBoO2iE6z-q5_s9fu4",
  authDomain: "add-and-craft.firebaseapp.com",
  projectId: "add-and-craft",
  storageBucket: "add-and-craft.appspot.com",
  messagingSenderId: "209275889036",
  appId: "1:209275889036:web:95bfd9e202eafc467322a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

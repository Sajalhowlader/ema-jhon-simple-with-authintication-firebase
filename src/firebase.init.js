// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-gQsvM2RTgX8PtkPda92MbIi7sc6uE0E",
    authDomain: "ema-zon-simple-ae520.firebaseapp.com",
    projectId: "ema-zon-simple-ae520",
    storageBucket: "ema-zon-simple-ae520.appspot.com",
    messagingSenderId: "161244788999",
    appId: "1:161244788999:web:f614c0856cf5954d30eda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
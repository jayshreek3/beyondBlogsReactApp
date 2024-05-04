// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB3hzHTMxp_R98R-En_FLO77zp7jf-dtI",
    authDomain: "blog-application-7a0d3.firebaseapp.com",
    projectId: "blog-application-7a0d3",
    storageBucket: "blog-application-7a0d3.appspot.com",
    messagingSenderId: "771690041164",
    appId: "1:771690041164:web:885e97f90399043ed209e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
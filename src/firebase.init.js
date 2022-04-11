// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk2DjsKw-5UO3x038Zwv-9bv-MmIMt68c",
    authDomain: "genious-car-services-d1d00.firebaseapp.com",
    projectId: "genious-car-services-d1d00",
    storageBucket: "genious-car-services-d1d00.appspot.com",
    messagingSenderId: "70831053787",
    appId: "1:70831053787:web:78590355cd37af1c3a25fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;
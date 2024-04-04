// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF1_ow_NatoA1OQAr0rQ0EPIz_l85oQRs",
  authDomain: "mern-book-inventory-128d5.firebaseapp.com",
  projectId: "mern-book-inventory-128d5",
  storageBucket: "mern-book-inventory-128d5.appspot.com",
  messagingSenderId: "1049634332094",
  appId: "1:1049634332094:web:3e2dd3d59c3aa125c5adef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
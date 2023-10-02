// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD5Yi1kcJ6E-aWi3VLpIroWWg6FUVqKt6Y",
  authDomain: "react-netflix-clone-35406.firebaseapp.com",
  projectId: "react-netflix-clone-35406",
  storageBucket: "react-netflix-clone-35406.appspot.com",
  messagingSenderId: "1025027579173",
  appId: "1:1025027579173:web:4d78fdae8bd01edf600ecc",
  measurementId: "G-91NNM3GQ5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
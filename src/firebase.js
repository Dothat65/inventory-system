// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjlojusgBKiD8ZRcVDAMGRPLJPIlkpqYQ",
  authDomain: "inventory-management-cca05.firebaseapp.com",
  projectId: "inventory-management-cca05",
  storageBucket: "inventory-management-cca05.appspot.com",
  messagingSenderId: "420398298247",
  appId: "1:420398298247:web:945d3653b91ad620d53422",
  measurementId: "G-C873LYH2GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };

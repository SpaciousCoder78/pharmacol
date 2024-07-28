// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ1pFlIJtDLubOQqkXCctcpwU8F6cLxec",
  authDomain: "pharmacy-billing-system.firebaseapp.com",
  projectId: "pharmacy-billing-system",
  storageBucket: "pharmacy-billing-system.appspot.com",
  messagingSenderId: "452819719507",
  appId: "1:452819719507:web:94de166e9069807c283da6",
  measurementId: "G-FGM084WV3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHfGeN10N3GTVVlMBNWCEAl70Gm3K9Iwo",
  authDomain: "cstniet-2024.firebaseapp.com",
  projectId: "cstniet-2024",
  storageBucket: "cstniet-2024.appspot.com",
  messagingSenderId: "1031418381875",
  appId: "1:1031418381875:web:2316efc5e508dcaa51c546",
  measurementId: "G-X5Z0YBRLP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export {app, auth, firestore, analytics};

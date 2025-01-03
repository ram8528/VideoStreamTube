// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoC66vdH6Tu6WwIIug7bn3ybBwC4srhv8",
  authDomain: "videostreamtube1.firebaseapp.com",
  projectId: "videostreamtube1",
  storageBucket: "videostreamtube1.firebasestorage.app",
  messagingSenderId: "370005236464",
  appId: "1:370005236464:web:111de8c5de1c25408a0035",
  measurementId: "G-MMG3VN33VB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

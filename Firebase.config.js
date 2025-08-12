// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyAF28_uOEL8BHMh3t4gDYqVBez3O0HtEqY",
  authDomain: "blog-cead8.firebaseapp.com",
  databaseURL: "https://blog-cead8-default-rtdb.firebaseio.com",
  projectId: "blog-cead8",
  storageBucket: "blog-cead8.firebasestorage.app",
  messagingSenderId: "464029501376",
  appId: "1:464029501376:web:badc6ee5da8837f3e92a25",
  measurementId: "G-WY0G9BN75F"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default firebaseConfig
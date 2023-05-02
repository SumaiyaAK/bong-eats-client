// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFffcI8kkvwwNUKIraYJGCWd3SNb6Kj1c",
  authDomain: "bong-eats-fb1d0.firebaseapp.com",
  projectId: "bong-eats-fb1d0",
  storageBucket: "bong-eats-fb1d0.appspot.com",
  messagingSenderId: "286732720150",
  appId: "1:286732720150:web:bf3e52538d6a571b023d37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
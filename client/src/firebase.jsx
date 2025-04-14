// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwjIZSK8mjaT5_WlO62ovocYKaOXVn4mo",
  authDomain: "schoola-f33d6.firebaseapp.com",
  projectId: "schoola-f33d6",
  storageBucket: "schoola-f33d6.firebasestorage.app",
  messagingSenderId: "102459780500",
  appId: "1:102459780500:web:2a22ee58c9f5a6ebafb381",
  measurementId: "G-JSNDEVWEFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
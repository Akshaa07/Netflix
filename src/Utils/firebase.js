// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBb8GVzH5-3iCBGsByA4y2KYfQoJ2QCAk",
  authDomain: "netflixgpt-51bea.firebaseapp.com",
  projectId: "netflixgpt-51bea",
  storageBucket: "netflixgpt-51bea.appspot.com",
  messagingSenderId: "956763200656",
  appId: "1:956763200656:web:1f441fe7a96d474c198c15",
  measurementId: "G-686G28QY7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
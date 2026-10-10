// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpGLoIfZXFBIE8BhEV_Ts5F7jI2hJ8LZ0",
  authDomain: "authentication-0325.firebaseapp.com",
  projectId: "authentication-0325",
  storageBucket: "authentication-0325.firebasestorage.app",
  messagingSenderId: "967714037361",
  appId: "1:967714037361:web:6728e5d13c1d522ba505d0",
  measurementId: "G-BJ9JBXW847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
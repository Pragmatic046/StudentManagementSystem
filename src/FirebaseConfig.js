// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPiSfZoQTTg4gl1ybKHcz_BqS3haODl6U",
  authDomain: "studentmanagementsystem-d311f.firebaseapp.com",
  projectId: "studentmanagementsystem-d311f",
  storageBucket: "studentmanagementsystem-d311f.appspot.com",
  messagingSenderId: "112281483237",
  appId: "1:112281483237:web:7233a028734bc0ed97610c",
//   measurementId: "G-098Y318WNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db}
// const analytics = getAnalytics(app);
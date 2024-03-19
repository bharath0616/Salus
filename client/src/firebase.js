// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPiWCOMbgLEtxKVzx21wKFolRaEY6_VVE",
  authDomain: "salus-e6ed8.firebaseapp.com",
  projectId: "salus-e6ed8",
  storageBucket: "salus-e6ed8.appspot.com",
  messagingSenderId: "419449168229",
  appId: "1:419449168229:web:1e5f11eb25b02eb1ac818c",
  measurementId: "G-7EBBFQ44XD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
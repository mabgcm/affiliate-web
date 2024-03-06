import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLZL5hK5y023SSlbDqfwwswVQOE39bzDA",
    authDomain: "blog-84368.firebaseapp.com",
    projectId: "blog-84368",
    storageBucket: "blog-84368.appspot.com",
    messagingSenderId: "485296780611",
    appId: "1:485296780611:web:1e693a763afaad0b66abf6",
    // measurementId: "G-5E0EYBDM7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
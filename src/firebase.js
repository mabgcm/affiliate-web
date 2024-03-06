import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-4u_VvjXFI2HjgBxErsQtfkvLZCa7EUc",
    authDomain: "affiliate-web-873f1.firebaseapp.com",
    projectId: "affiliate-web-873f1",
    storageBucket: "affiliate-web-873f1.appspot.com",
    messagingSenderId: "668091370489",
    // measurementId: "G-T4ZL0H1QHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
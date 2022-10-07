// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSNL8SrSTirXsW6Rn8XNRBwyln6Vry7z0",
    authDomain: "quote-8602c.firebaseapp.com",
    projectId: "quote-8602c",
    storageBucket: "quote-8602c.appspot.com",
    messagingSenderId: "7126219293",
    appId: "1:7126219293:web:a03a032cd04b8222a024f4",
    measurementId: "G-25ZJH24YXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
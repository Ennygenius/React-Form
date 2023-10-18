// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNrVX0QZvRvGtoeoyj1hhLP2GJ1j6TZX4",
  authDomain: "expressformuk.firebaseapp.com",
  projectId: "expressformuk",
  storageBucket: "expressformuk.appspot.com",
  messagingSenderId: "533043666434",
  appId: "1:533043666434:web:850f34bd8a4f85d066111b",
  measurementId: "G-DF146EQLD4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);

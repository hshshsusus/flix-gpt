// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6I0MIVF5y3fZKmbTnKE7-YOFWFbK59AA",
  authDomain: "flix-gpt-4f777.firebaseapp.com",
  projectId: "flix-gpt-4f777",
  storageBucket: "flix-gpt-4f777.firebasestorage.app",
  messagingSenderId: "29481528202",
  appId: "1:29481528202:web:6fdb090e82726313c1b673",
  measurementId: "G-DGEM0WYSH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
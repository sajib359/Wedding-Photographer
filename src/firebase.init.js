// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMDsbXkGvlLMK_hydq_yotClGKhpc6Ym4",
  authDomain: "wedding-photographer-379ba.firebaseapp.com",
  projectId: "wedding-photographer-379ba",
  storageBucket: "wedding-photographer-379ba.appspot.com",
  messagingSenderId: "967689742538",
  appId: "1:967689742538:web:b10a1b9cab3b18e287ec33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
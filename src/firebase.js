import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyCXYtiQyE8KhQJvQ78Yn7CtYrnq9U6RFLQ",
    authDomain: "vender-403f5.firebaseapp.com",
    projectId: "vender-403f5",
    storageBucket: "vender-403f5.appspot.com",
    messagingSenderId: "657531567693",
    appId: "1:657531567693:web:c89458206270715d75e604",
    measurementId: "G-SPXTC8VYB6"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export  {app, auth};
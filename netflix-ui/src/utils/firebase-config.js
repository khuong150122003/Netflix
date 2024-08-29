import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsqnpP54Y2UIm4bbP3uYIKkYmEPn4pACk",
  authDomain: "netflix-clone-ff241.firebaseapp.com",
  projectId: "netflix-clone-ff241",
  storageBucket: "netflix-clone-ff241.appspot.com",
  messagingSenderId: "911127980285",
  appId: "1:911127980285:web:342c6dbb08079668353694",
  measurementId: "G-15ST056KV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

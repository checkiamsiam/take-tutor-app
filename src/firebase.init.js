// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhibKK9oX51pQJ0Ne1LFRyg9W2Ig3pFrA",
  authDomain: "take-tutor.firebaseapp.com",
  projectId: "take-tutor",
  storageBucket: "take-tutor.appspot.com",
  messagingSenderId: "1002723796202",
  appId: "1:1002723796202:web:2a85dda839eca5f6722393"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
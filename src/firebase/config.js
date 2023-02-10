// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMBgxrxkLNVXa8gjQKzvstyoSWGNyHEVM",
  authDomain: "ecommerce-e4722.firebaseapp.com",
  projectId: "ecommerce-e4722",
  storageBucket: "ecommerce-e4722.appspot.com",
  messagingSenderId: "133659586646",
  appId: "1:133659586646:web:26c7b640faf1f6ce184bf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

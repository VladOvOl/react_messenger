import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDDrIpm4tBDJna4bmd5EDHMZQY9IVv9p0o",
  authDomain: "reactmessenger-b6a3c.firebaseapp.com",
  projectId: "reactmessenger-b6a3c",
  storageBucket: "reactmessenger-b6a3c.appspot.com",
  messagingSenderId: "841970487764",
  appId: "1:841970487764:web:df3246975e990813f48641"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

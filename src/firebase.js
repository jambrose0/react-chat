import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCtq95n3qWgHtXEVIXhgTufXQzdefNkwMA',
  authDomain: "chatv3-69022.firebaseapp.com",
  projectId: "chatv3-69022",
  storageBucket: "chatv3-69022.appspot.com",
  messagingSenderId: "51470359230",
  appId: "1:51470359230:web:11167e419b1f58942bdcef"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
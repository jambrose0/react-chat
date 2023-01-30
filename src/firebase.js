require('dotenv').config()
import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Chat_API_Key,
  authDomain: "chatv3-69022.firebaseapp.com",
  projectId: "chatv3-69022",
  storageBucket: "chatv3-69022.appspot.com",
  messagingSenderId: "51470359230",
  appId: "1:51470359230:web:11167e419b1f58942bdcef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyATRgGRGzp44xLSv4iRllSHotPbuKmRB7k",
  authDomain: "expensetracker-4dd0e.firebaseapp.com",
  projectId: "expensetracker-4dd0e",
  storageBucket: "expensetracker-4dd0e.appspot.com",
  messagingSenderId: "942362155045",
  appId: "1:942362155045:web:0ddb148c7bac41d3cbc7cc"

};


  



initializeApp(firebaseConfig);

const db = getFirestore();
export default db
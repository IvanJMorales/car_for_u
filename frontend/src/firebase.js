import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA--UmPtC2rVHVjcvpIRicy1m4iy7QamSE",

  authDomain: "car4u-3.firebaseapp.com",

  databaseURL: "https://car4u-3-default-rtdb.firebaseio.com",

  projectId: "car4u-3",

  storageBucket: "car4u-3.appspot.com",

  messagingSenderId: "642625303992",

  appId: "1:642625303992:web:4b4163e3195d2adc494b4d",

  measurementId: "G-LSJ4MBC0G6"

};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(app);

// Initialize Authentication 
export const auth = getAuth(app);


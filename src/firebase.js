// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


/// In tutorial -> this file only contains this object

const firebaseConfig = {

  apiKey: "AIzaSyBMUbAznK_DmpZyFOPQ8ArXy17vr0wSOsQ",

  authDomain: "challenge-d7f05.firebaseapp.com",

  projectId: "challenge-d7f05",

  storageBucket: "challenge-d7f05.appspot.com",

  messagingSenderId: "66177300268",

  appId: "1:66177300268:web:f0ec9b41a799ee54009e89",

  measurementId: "G-47MQC3DRCQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
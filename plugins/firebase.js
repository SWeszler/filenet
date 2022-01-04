// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Vue from 'vue';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvoEKgLs8n36KCDmIuv4NqM1gfUMhsyJg",
  authDomain: "filenet-17199.firebaseapp.com",
  projectId: "filenet-17199",
  storageBucket: "filenet-17199.appspot.com",
  messagingSenderId: "558652622063",
  appId: "1:558652622063:web:871a8a6a19f23ef61b471a",
  measurementId: "G-FEDVELVC45"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export default {
  fire: firebaseApp
}
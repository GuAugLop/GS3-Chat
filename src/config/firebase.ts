import * as firebase from "firebase/app";

import { getFirestore } from "firebase/firestore";

export const config = {
  apiKey: "AIzaSyAJHynjlMW7nWd_JUsFK3cx-U8QRGe_ZpI",
  authDomain: "chatgs3.firebaseapp.com",
  projectId: "chatgs3",
  storageBucket: "chatgs3.appspot.com",
  messagingSenderId: "788817507994",
  appId: "1:788817507994:web:f29f3c80ab6250b0e8d123",
};

export const firebaseApp = firebase.initializeApp(config);
export const db = getFirestore();

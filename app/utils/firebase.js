import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg6zcS6Z0ZIiOBvypr91rSWro09PhmjaA",
  authDomain: "domiya-2d1d7.firebaseapp.com",
  projectId: "domiya-2d1d7",
  storageBucket: "domiya-2d1d7.appspot.com",
  messagingSenderId: "508816768763",
  appId: "1:508816768763:web:f13a5a3509de3f38ae3a5e",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

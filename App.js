import React, { useEffect } from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseApp } from "./app/utils/firebase";
import Navegacion from "./app/navigations/Navegacion";

export default function App() {
  
  return <Navegacion></Navegacion>;
}

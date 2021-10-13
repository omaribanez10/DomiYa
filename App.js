import React, { useEffect } from "react";
import { firebaseApp } from "./app/utils/firebase";
/*import firebase from "firebase/app";
import "firebase/auth";*/
import Navegacion from "./app/navigations/Navegacion";

export default function App() {
  return <Navegacion></Navegacion>;
}

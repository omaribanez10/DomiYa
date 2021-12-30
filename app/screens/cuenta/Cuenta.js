import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import UsuarioInvitado from "./UsuarioInvitado";
import UsuarioLoggeado from "./UsuarioLoggeado";

export default function Cuenta() {

  const [login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) =>{
      !user ? setLogin(false) : setLogin(true);
      console.log(user);
     
    })
  }, [])

  if(login === null) return <Text>Cargando...</Text>

  return login ? <UsuarioLoggeado/> : <UsuarioInvitado/>;
}

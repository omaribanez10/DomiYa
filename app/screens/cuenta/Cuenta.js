import React, {useState, useEffect} from "react";
import { View, Text } from "react-native";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import Loading from "../../components/Loading"
import UsuarioInvitado from "./UsuarioInvitado";
import UsuarioLoggeado from "./UsuarioLoggeado";

export default function Cuenta() {

  const [login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) =>{
      !user ? setLogin(false) : setLogin(true);
     
     
    })
  }, [])

  if(login === null) return <Loading isVisible={true} text="Cargando..."/>

  return login ? <UsuarioLoggeado/> : <UsuarioInvitado/>;
}

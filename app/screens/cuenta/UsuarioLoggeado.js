import React from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase/app";


export default function UsuarioLoggeado() {
  return (
    <View>
      <Text>Usuario Loggeado...</Text>
      <Button title="Cerrar sesión" onPress={()=> firebase.auth().signOut()}/>
    </View>
  );
}

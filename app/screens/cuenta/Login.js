import React, {useRef} from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useNavigation} from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import FormularioLogin from "../../components/Cuenta/FormularioLogin";

export default function Login() {
  const toastRef = useRef();  
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <FormularioLogin toastRef={toastRef}/>
        <CreateAccount />
      </View>

      <Divider style={styles.divider}/>
      <Text>Social Login</Text>
      <Toast ref={toastRef} position="center" opacity={0.9}/>
    </KeyboardAwareScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation(); 
  return (
    <Text style={styles.textoRegistro}>
      ¿Aún no tienes una cuenta?{" "}
      <Text style={styles.btnRegistro} onPress={() => navigation.navigate('registro')}>Registrate!.</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textoRegistro: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegistro: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider:{
      backgroundColor:"#00a680",
      margin:40,
  }
});

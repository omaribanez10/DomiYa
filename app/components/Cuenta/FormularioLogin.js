import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../Loading";
import { validateEmail } from "../../utils/validations";
import { isEmpty } from "lodash";
import firebase from "firebase/app";
import {useNavigation} from "@react-navigation/native"

export default function FormularioLogin(props) {
  const navigation = useNavigation();
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({}); 
  const [loading, setLoading] = useState(false); 
  
  const onChange = (e, type) => {
     setFormData({...formData, [type]: e.nativeEvent.text});
  }
  const onSubmit = () => {
      if(isEmpty(formData.email) || isEmpty(formData.password)){
         toastRef.current.show("Los campos no pueden estar vacíos.");
      }else if(!validateEmail(formData.email)){
        toastRef.current.show("El correo electrónico es inválido.");
      }else{
         setLoading(true);
          firebase.auth().signInWithEmailAndPassword(formData.email, formData.password).then((response) =>{
            navigation.navigate("cuenta");

          }).catch((error) =>{
            setLoading(false);
            toastRef.current.show("El correo o la contraseña no son válidos, por favor verifique sus credenciales.");
          });
      }
  }
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
        <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "password")}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button 
      title="Iniciar sesión" 
      containerStyle={styles.btnContainer} 
      buttonStyle={styles.btn} 
      onPress={onSubmit}/>

      <Loading isVisible={loading} text="Iniciando sesión"/>
    </View>
  );
}

function defaultFormValue(){
    return {
        email:'',
        password:'',
    };
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  inputForm:{
      width: "100%",
      marginTop: 20,
  },
  btnContainer:{
    marginTop: 20,
    width: "95%",  

  },
  btn:{
      backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});

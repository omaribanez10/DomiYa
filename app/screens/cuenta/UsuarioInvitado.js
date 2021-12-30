import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UsuarioInvitado() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        style={styles.image}
        source={require("../../../assets/img/user-guest.jpg")}
        resize="contain"
      />
      <Text style={styles.title}>
        Consulta tu perfil dentro de la aplicación
      </Text>
      <Text style={styles.descripcion}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>

      <View style={styles.view}>
        <Button
          buttonStyle={styles.button}
          containerStyle={styles.container}
          title="Ver tu perfil"
          onPress={() => console.log("Click")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  descripcion: {
    textAlign: "center",
    marginBottom: 20,
  },
  view: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00a680",
  },
  container: {
    width: "70%",
  },
});

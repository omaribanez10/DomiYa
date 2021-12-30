import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import NegociosStack from "./NegociosStack";
import FavoritosStack from "./FavoritosStack";
import TopNegociosStack from "./TopNegociosStack";
import BusquedaStack from "./BusquedaStack";
import CuentaStack from "./CuentaStack";

import Negocios from "../screens/Negocios";
import Favoritos from "../screens/Favoritos";
import TopNegocios from "../screens/TopNegocios";
import Busqueda from "../screens/Busqueda";
import Cuenta from "../screens/cuenta/Cuenta";
const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="negocios"
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#646464",
          tabBarActiveTintColor: "#00a680",
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="negocios"
          component={Negocios}
          options={{ title: "Negocios" }}
        ></Tab.Screen>

        <Tab.Screen
          name="busqueda"
          component={Busqueda}
          options={{ title: "Búsqueda" }}
        ></Tab.Screen>
        <Tab.Screen
          name="favoritos"
          component={Favoritos}
          options={{ title: "Favoritos" }}
        ></Tab.Screen>
        <Tab.Screen
          name="top-negocios"
          component={TopNegocios}
          options={{ title: "Top Negocios" }}
        ></Tab.Screen>
        <Tab.Screen
          name="cuenta"
          component={Cuenta}
          options={{ title: "Cuenta" }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "negocios":
      iconName = "compass-outline";
      break;
    case "cuenta":
      iconName = "account-outline";
      break;
    case "favoritos":
      iconName = "heart-outline";
      break;
    case "busqueda":
      iconName = "magnify";
      break;
    case "top-negocios":
      iconName = "star-outline";
      break;
    default:
      break;
  }
  return (
    <Icon
      type="material-community"
      name={iconName}
      fontSize="22"
      color={color}
    ></Icon>
  );
}

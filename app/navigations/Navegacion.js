import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import NegociosStack from "./NegociosStack";
import FavoritosStack from "./FavoritosStack";
import TopNegociosStack from "./TopNegociosStack";
import BusquedaStack from "./BusquedaStack";
import CuentaStack from "./CuentaStack";

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
          component={NegociosStack}
          options={{ title: "Negocios" }}
        ></Tab.Screen>

        <Tab.Screen
          name="busqueda"
          component={BusquedaStack}
          options={{ title: "Búsqueda" }}
        ></Tab.Screen>
        <Tab.Screen
          name="favoritos"
          component={FavoritosStack}
          options={{ title: "Favoritos" }}
        ></Tab.Screen>
        <Tab.Screen
          name="top-negocios"
          component={TopNegociosStack}
          options={{ title: "Top Negocios" }}
        ></Tab.Screen>
        <Tab.Screen
          name="cuenta"
          component={ CuentaStack}
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

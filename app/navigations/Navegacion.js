import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {} from "react-native-elements";

import NegociosStack from "./NegociosStack";
import FavoritosStack from "./FavoritosStack";
import TopNegociosStack from "./TopNegociosStack";
import BusquedaStack from "./BusquedaStack";
import CuentaStack from "./CuentaStack";

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          name="Top-negocios"
          component={TopNegociosStack}
          options={{ title: "Top Negocios" }}
        ></Tab.Screen>
        <Tab.Screen
          name="cuenta"
          component={CuentaStack}
          options={{ title: "Cuenta" }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

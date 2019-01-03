import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  NavigationActions,
  DrawerActions
} from "react-navigation";
import firebase from "@firebase/app";
import "@firebase/auth";

import Home from "../screens/Home";
import BottlecapCodList from "../screens/BottlecapCodList";
import CanscapCodList from "../screens/CanscapCodList";
import AnylineHome from "../src/AnylineHome";
import Icon from "react-native-vector-icons/FontAwesome";

onSignoutPress = () => {
  firebase.auth().signOut();
};

const drawerScreens = createDrawerNavigator({
  AnylineHome: {
    screen: AnylineHome,
    navigationOptions: {
      drawerLabel: "Home",

      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color="#ff0000" />
      )
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: "Profil",

      drawerIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color="#ff0000" />
      )
    }
  },
  BottlecapCodList: {
    screen: BottlecapCodList,
    navigationOptions: {
      drawerLabel: "Bottlecap Cod List",

      drawerIcon: ({ tintColor }) => (
        <Icon name="list-alt" size={25} color="#ff0000" />
      )
    }
  },

  CanscapCodList: {
    screen: CanscapCodList,
    navigationOptions: {
      drawerLabel: "Canscap Cod List",

      drawerIcon: ({ tintColor }) => (
        <Icon name="list-alt" size={25} color="#ff0000" />
      )
    }
  }
});

export default (AppStack = createStackNavigator(
  {
    AnylineHome: {
      screen: drawerScreens
    }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <View style={{ marginLeft: 20 }}>
          <Icon
            name="bars"
            size={25}
            color="#ff0000"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>
      ),
      headerRight: (
        <View style={{ marginRight: 20 }}>
          <Icon
            name="power-off"
            size={25}
            color="#ff0000"
            onPress={this.onSignoutPress}
          />
        </View>
      ),
      title: "COCA COLA",
      headerTitleStyle: {
        flex: 1,
        textAlign: "center",
        alignSelf: "center"
      },

      headerTintColor: "lightgrey",
      headerStyle: {
        backgroundColor: "#000000",
        fontSize: 24,
        justifyContent: "center",
        color: "#ffff",

        borderBottomColor: "#ff0000",
        borderBottomWidth: 1
      }
    })
  }
));

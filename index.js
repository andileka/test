import React, { Component } from "react";
import {
  AppRegistry,
  BackHandler,
  LayoutAnimation,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import ApiKeys from "./constants/ApiKeys";
import firebase from "@firebase/app";
import "@firebase/auth";

import { Provider } from "react-redux";
import { store } from "./redux/app-redux";

import AppStackNavigation from "./navigation/AppStackNavigation";
import AuthNavigator from "./navigation/AuthNavigator";

export default class Anyline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticationReady: false,
      isAuthenticated: false
    };

    //initilize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  };

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Provider store={store}>
          <AppStackNavigation />
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <AuthNavigator />
        </Provider>
      );
    }
  }
}
AppRegistry.registerComponent("tttttttttttt", () => Anyline);

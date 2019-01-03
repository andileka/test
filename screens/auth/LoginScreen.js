import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Alert,
  ScrollView
} from "react-native";
import { Input, Button } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

import firebase from "@firebase/app";
import "@firebase/auth";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const BG_IMAGE = require("../../assets/images/Coca_Cola.jpg");

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      email: "",
      email_valid: true,
      password: "",
      login_failed: false,
      showLoading: false
    };
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading
    });
  }
  onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };

  render() {
    const { email, password, email_valid, showLoading } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
          <View style={styles.container}>
            <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
              <View style={styles.loginView}>
                <View style={styles.loginTitle}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.travelText} />
                  </View>
                  <View style={{ marginTop: -10 }}>
                    <Text style={styles.travelText} />
                  </View>
                </View>
                <View style={styles.loginInput}>
                  <Input
                    leftIcon={
                      <Icon
                        name="user-o"
                        color="rgba(171, 189, 219, 1)"
                        size={25}
                      />
                    }
                    containerStyle={{ marginVertical: 10 }}
                    onChangeText={text => {
                      this.setState({ email: text });
                    }}
                    value={email}
                    inputStyle={{ marginLeft: 10, color: "white" }}
                    keyboardAppearance="light"
                    placeholder="Email"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    ref={input => (this.emailInput = input)}
                    onSubmitEditing={() => {
                      this.setState({ email_valid: this.validateEmail(email) });
                      this.passwordInput.focus();
                    }}
                    blurOnSubmit={false}
                    placeholderTextColor="white"
                    errorStyle={{ textAlign: "center", fontSize: 12 }}
                    errorMessage={
                      email_valid ? null : "Please enter a valid email address"
                    }
                  />
                  <Input
                    leftIcon={
                      <Icon
                        name="lock"
                        color="rgba(171, 189, 219, 1)"
                        size={25}
                      />
                    }
                    containerStyle={{ marginVertical: 10 }}
                    onChangeText={text => {
                      this.setState({ password: text });
                    }}
                    value={password}
                    inputStyle={{ marginLeft: 10, color: "white" }}
                    secureTextEntry={true}
                    keyboardAppearance="light"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    returnKeyType="done"
                    ref={input => (this.passwordInput = input)}
                    blurOnSubmit={true}
                    placeholderTextColor="white"
                  />
                </View>
                <Button
                  title="LOG IN"
                  activeOpacity={1}
                  underlayColor="transparent"
                  onPress={this.onLoginPress}
                  loading={showLoading}
                  loadingProps={{ size: "small", color: "white" }}
                  disabled={!email_valid && password.length < 8}
                  buttonStyle={{
                    height: 50,
                    width: 250,
                    backgroundColor: "transparent",
                    borderWidth: 2,
                    borderColor: "white",
                    borderRadius: 30
                  }}
                  containerStyle={{ marginVertical: 10 }}
                  titleStyle={{ fontWeight: "bold", color: "white" }}
                />
                <View style={styles.footerView}>
                  <Button
                    title="Create an Account"
                    clear
                    activeOpacity={0.5}
                    titleStyle={{ color: "white", fontSize: 15 }}
                    containerStyle={{ marginTop: -10 }}
                    onPress={() => this.props.navigation.navigate("Signup")}
                  />
                  <Button
                    title="Forgot Password ?"
                    clear
                    activeOpacity={0.5}
                    titleStyle={{ color: "white", fontSize: 15 }}
                    containerStyle={{ marginTop: -10 }}
                    onPress={() =>
                      this.props.navigation.navigate("ForgotPassword")
                    }
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  },
  loginView: {
    marginTop: 150,
    backgroundColor: "transparent",
    width: 250,
    height: 400
  },
  loginTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  travelText: {
    color: "white",
    fontSize: 30,
    fontFamily: "bold"
  },
  plusText: {
    color: "white",
    fontSize: 30,
    fontFamily: "regular"
  },
  loginInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footerView: {
    marginTop: 20,
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  }
});

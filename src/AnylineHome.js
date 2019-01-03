import React, { Component } from "react";
import {
  AppRegistry,
  BackHandler,
  LayoutAnimation,
  PermissionsAndroid,
  ScrollView,
  Dimensions,
  StyleSheet,
  Platform,
  ImageBackground,
  Text,
  View,
  TextInput,
  AlertIOS
} from "react-native";

import AnylineOCR from "anyline-ocr-react-native-module";

import Result from "./Result";
import Overview from "./Overview";
import CustomButton from "../components/CustomButton";

import RedBullConfig from "../configAnyline/RedBullConfig";
import BottlecapConfig from "../configAnyline/BottlecapConfig";

//////
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

import { connect } from "react-redux";

import { setanyResult } from "../services/ActionService";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const BG_IMAGE3 = require("../assets/images/wallpaper2you_210189.jpg");

///////

// Disable Warnings
console.disableYellowBox = true;

class AnylineHome extends Component {
  /////

  constructor(props) {
    super(props);
    this.state = {
      anyResult: ""
    };
    this.onSetanyResultPress = this.onSetanyResultPress.bind(this);
  }

  onSetanyResultPress = () => {
    setanyResult(this.state.anyResult);
  };
  ////

  state = {
    hasScanned: false,
    result: "",
    imagePath: "",
    fullImagePath: "",
    currentScanMode: "",
    buttonsDisabled: false,
    SDKVersion: ""
  };
  componentDidMount = async () => {
    const SDKVersion = await AnylineOCR.getSDKVersion();
    this.setState({ SDKVersion: SDKVersion });
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  openAnyline = async type => {
    this.setState({ buttonsDisabled: true });
    let config;

    this.setState({
      currentScanMode: type
    });
    switch (type) {
      case "BOTTLECAP":
        type = "ANYLINE_OCR";
        config = BottlecapConfig;
        break;

      case "CANSCAP":
        type = "ANYLINE_OCR";
        config = RedBullConfig;
        break;

      default:
        config = EnergyConfig;
        break;
    }

    try {
      const result = await AnylineOCR.setupPromise(
        JSON.stringify(config),
        type
      );

      this.setState({ buttonsDisabled: false });

      const data = JSON.parse(result);
      LayoutAnimation.easeInEaseOut();
      const fullImagePath = data.fullImagePath;
      const imagePath = data.imagePath;
      const anyResul = data.text;
      str = anyResul.replace(/[\n\r]+/g, " ");
      const anyResult = str;

      delete data.fullImagePath;
      delete data.imagePath;

      this.setState({
        hasScanned: true,
        result: data,
        imagePath: imagePath,
        fullImagePath: fullImagePath,
        anyResult: anyResult
      });
    } catch (error) {
      if (error !== "Canceled") {
        console.log(error);
      }
    }
    this.setState({ buttonsDisabled: false });
  };

  requestCameraPermission = async type => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Anyline Camera Permissions",
          message: "Allow Anyline to access you camera?"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission allowed");
        this.openAnyline(type);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  hasCameraPermission = async () => {
    try {
      return await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
    } catch (err) {
      console.warn(err, "PERMISSION CHECK");
    }
  };

  checkCameraPermissionAndOpen = type => {
    this.hasCameraPermission().then(hasCameraPermission => {
      console.log("hasCameraPermission result is " + hasCameraPermission);
      if (hasCameraPermission) {
        console.log("Opening OCR directly");
        this.openAnyline(type);
      } else {
        this.requestCameraPermission(type);
      }
    });
  };

  emptyResult = () => {
    this.setState({
      hasScanned: false,
      result: "",
      imagePath: "",
      fullImagePath: "",
      anyResult: ""
    });
  };

  render() {
    const {
      hasScanned,
      result,
      imagePath,
      fullImagePath,
      currentScanMode,
      buttonsDisabled,
      SDKVersion,
      anyResult,
      emptyResult
    } = this.state;

    BackHandler.addEventListener("hardwareBackPress", () => {
      if (hasScanned) {
        this.emptyResult();
        return true;
      } else {
        BackHandler.exitApp();
      }
    });

    return (
      <ImageBackground source={BG_IMAGE3} style={styles.bgImage}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.ContainerContent}
        >
          {hasScanned ? (
            <View>
              <Text style={styles.header}>{this.state.anyResult}</Text>

              <CustomButton
                text="SAVE"
                onPress={() => {
                  this.onSetanyResultPress();
                  this.emptyResult();
                }}
              />
            </View>
          ) : (
            <Overview
              key="OverView"
              openAnyline={this.openAnyline}
              checkCameraPermissionAndOpen={this.checkCameraPermissionAndOpen}
              disabled={buttonsDisabled}
            />
          )}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  versions: {
    color: "white",
    marginTop: 10
  },
  container: {
    flex: 1
  },
  ContainerContent: {
    alignItems: "center",
    justifyContent: "center"
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
  header: {
    fontSize: 24,
    justifyContent: "center",
    color: "#ffff",
    marginBottom: 40,
    marginTop: 60,
    borderBottomColor: "#000000",
    borderBottomWidth: 2
  },
  backButton: {
    marginTop: 25,
    width: "100%"
  }
});
export default AnylineHome;

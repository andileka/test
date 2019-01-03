import React, { Component } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Platform,
  ImageBackground
} from "react-native";
import CustomButton from "../components/CustomButton";
import { setanyResult } from "../services/ActionService";

import { Button } from "react-native-elements";

import { createIconSetFromFontello } from "react-native-vector-icons";
import fontelloConfig from "./config.json";
const Icon = createIconSetFromFontello(fontelloConfig);

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const BG_IMAGE3 = require("../assets/images/wallpaper2you_210189.jpg");

const BG_IMAGE = require("../assets/images/Coca-Cola.jpg");
const BG_IMAGE1 = require("../assets/images/cancapscola.png");

export default function Overview({
  openAnyline,
  checkCameraPermissionAndOpen,
  disabled
}) {
  const platformPermissionCheck =
    Platform.OS === "android" ? checkCameraPermissionAndOpen : openAnyline;

  return (
    <ImageBackground source={BG_IMAGE3} style={styles.bgImage}>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={BG_IMAGE}
          style={{
            marginTop: 50,
            borderWidth: 0,
            height: 150,
            width: 200,
            borderRadius: 20
          }}
          imageStyle={{
            borderColor: "#000000",
            borderWidth: 2,
            height: 150,
            width: 200,
            borderRadius: 20
          }}
        >
          <Button
            title="BOTTLECAP SCANNE"
            titleStyle={{ fontWeight: "500", fontSize: 25 }}
            buttonStyle={{
              height: 150,
              width: 200,
              borderRadius: 20
            }}
            onPress={() => {
              platformPermissionCheck("BOTTLECAP");
              setanyResult();
            }}
          />
        </ImageBackground>
        <ImageBackground
          source={BG_IMAGE1}
          style={{
            marginTop: 50,
            borderWidth: 0,
            height: 150,
            width: 200,
            borderRadius: 20
          }}
          imageStyle={{
            borderColor: "#000000",
            borderWidth: 2,
            height: 150,
            width: 200,
            borderRadius: 20
          }}
        >
          <Button
            title="CANSCAP SCANNE"
            titleStyle={{
              fontWeight: "500",
              fontSize: 25
            }}
            buttonStyle={{
              borderColor: "#4286f4",
              borderWidth: 0,
              height: 150,
              width: 200,
              borderRadius: 20
            }}
            onPress={() => {
              platformPermissionCheck("CANSCAP");
              setanyResult();
            }}
          />
        </ImageBackground>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    margin: 5
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
  text: {
    color: "#000000",
    textAlign: "center",
    fontSize: 20,
    marginTop: 25
  }
});

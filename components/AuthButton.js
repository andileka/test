import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback, Text, StyleSheet, View } from "react-native";

class AuthButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableNativeFeedback onPress={() => onPress()}>
        <View style={styles.buttonStyle}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

AuthButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  },

  buttonStyle: {
    padding: 4,
    backgroundColor: "#199187",
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,

    textAlign: "center"
  }
});

export default AuthButton;

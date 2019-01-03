import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class CustomButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center"
  },

  buttonStyle: {
    padding: 10,

    borderColor: "#000000",
    borderWidth: 3,
    borderRadius: 12,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    borderRadius: 30,
    textAlign: "center"
  }
});

export default CustomButton;

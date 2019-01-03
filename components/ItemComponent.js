import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.items}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.Value}</Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

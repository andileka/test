import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import ItemComponent from "../components/ItemComponent";
import ApiKeys from "../constants/ApiKeys";
import firebase from "@firebase/app";
import "@firebase/auth";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const BG_IMAGE3 = require("../assets/images/wallpaper2you_210189.jpg");

class CanscapCodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/canscapCod`)
      .on("value", snapshot => {
        let data = snapshot.val();
        let items = Object.values(data);

        this.setState({ items });
      });
  }

  render() {
    return (
      <ImageBackground source={BG_IMAGE3} style={styles.bgImage}>
        <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <FlatList
              data={this.state.items}
              renderItem={({ item }) => (
                <Text style={styles.loginText}>{item.Value}</Text>
              )}
            />
          ) : (
            <Text style={styles.oginText}>No items</Text>
          )}
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    paddingLeft: 60,
    paddingRight: 60
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
  item: {
    fontSize: 24,
    alignSelf: "stretch",
    height: 40,
    marginBottom: 10,
    color: "#fff",
    borderBottomColor: "#199187",
    borderBottomWidth: 1
  },
  loginText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "transparent",
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10
  }
});

export default CanscapCodList;

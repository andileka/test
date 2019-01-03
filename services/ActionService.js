import firebase from "@firebase/app";
import "@firebase/auth";

export const setanyResult = anyResult => {
  const { currentUser } = firebase.auth();
  var length = anyResult.length;
  console.log(anyResult);
  var data = new Array({});

  if (length === 11) {
    firebase
      .database()
      .ref("users")
      .orderByChild("bottlecapCod")

      .on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val().bottlecapCod;

          let items = Object.values(childData);

          items.forEach(Value => {
            data.push(Value);
          });
        });
      });
    console.log(data);
    var exist = data.some(item => item.Value === anyResult);

    if (exist === false) {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/bottlecapCod`)
        .push({ Value: anyResult });
    }
  }

  if (length === 9) {
    firebase
      .database()
      .ref("users")
      .orderByChild("canscapCod")

      .on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val().canscapCod;

          let items = Object.values(childData);

          items.forEach(Value => {
            data.push(Value);
          });
        });
      });
    console.log(data);
    var exist = data.some(item => item.Value === anyResult);

    if (exist === false) {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/canscapCod`)
        .push({ Value: anyResult });
    }
  }
};

//.on("value", snap => {
//  var data = [];
//  snapshot.forEach(ss => {
//    data.push(ss.child("bottlecapCod").val());
// });
//  console.log(data);

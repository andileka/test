import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

//
// Initial State...
//

const initialState = {
  anyResult: ""
};

//
// Reducer...
//

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };
//
// Action Creators...
//

const actionanyResult = anyResult => {
  return {
    type: " actionanyResult",
    value: anyResult
  };
};

export { actionanyResult };

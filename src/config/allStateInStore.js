import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
}

const allStateInStore = combineReducers({
  todo: todos,
});

export default allStateInStore;

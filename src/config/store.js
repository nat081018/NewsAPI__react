import React from "react";
import { createStore } from "redux";
import allStateInStore from "./allStateInStore";

const store = createStore(allStateInStore);
// если store поустой выкинет кучу ощибок
export default store;

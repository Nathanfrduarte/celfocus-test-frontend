import { combineReducers, configureStore } from "@reduxjs/toolkit";
import phoneDetails from "./phoneDetails";

const reducer = combineReducers({
  phoneDetails,
});

const store = configureStore({
  reducer,
});

export default store;

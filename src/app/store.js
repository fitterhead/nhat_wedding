import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/pageCom/contentSlice";
const rootReducer = {
  content: contentReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;

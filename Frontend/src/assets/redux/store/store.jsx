import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "../reducers/LoginReducer";
import exploreReducers from "../reducers/ExploreReducer";
import PostCardReducer from "../reducers/PostCardReducer";

export const store = configureStore({
  reducer: {
    explore: exploreReducers,
    login: loginReducers,
    postcard: PostCardReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "../reducers/LoginReducer";
import exploreReducers from "../reducers/ExploreReducer";
import PostCardReducer from "../reducers/PostCardReducer";
import  userFeedReducers  from "../reducers/UserFeedReducers";
import  postViewReducers  from "../reducers/PostViewReducers";

export const store = configureStore({
  reducer: {
    explore: exploreReducers,
    getbyid: postViewReducers,
    userfeed: userFeedReducers,
    login: loginReducers,
    postcard: PostCardReducer,
  },
});

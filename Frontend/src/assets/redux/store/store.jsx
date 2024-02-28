import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "../reducers/LoginReducer";
import exploreReducers from "../reducers/ExploreReducer";
import PostCardReducer from "../reducers/PostCardReducer";
import  userFeedReducers  from "../reducers/UserFeedReducers";
import  postViewReducers  from "../reducers/PostViewReducers";
import  createPostReducers  from "../reducers/CreatePostReducer";
import  signupReducers  from "../reducers/SignupReducer";

export const store = configureStore({
  reducer: {
    create: createPostReducers,
    explore: exploreReducers,
    getbyid: postViewReducers,
    userfeed: userFeedReducers,
    login: loginReducers,
    signup: signupReducers,
    postcard: PostCardReducer,
  },
});

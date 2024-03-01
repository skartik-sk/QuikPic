import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "../reducers/LoginReducer";
import exploreReducers from "../reducers/ExploreReducer";
import PostCardReducer from "../reducers/PostCardReducer";
import userFeedReducers from "../reducers/UserFeedReducers";
import postViewReducers from "../reducers/PostViewReducers";
import createPostReducers from "../reducers/CreatePostReducer";
import signupReducers from "../reducers/SignupReducer";
import forgotpasswordReducers from "../reducers/ForgotPasswordReducer";
import logoutReducers from "../reducers/LogoutReducer";
import deleteuserReducers from "../reducers/DeleteUserReducer";
import MeReducer from "../reducers/MeReducer";
// import authReducers from "../reducers/AuthReducer";

export const store = configureStore({
  reducer: {
    me: MeReducer,
    create: createPostReducers,
    explore: exploreReducers,
    getbyid: postViewReducers,
    userfeed: userFeedReducers,
    login: loginReducers,
    signup: signupReducers,
    postcard: PostCardReducer,
    forgotpassword: forgotpasswordReducers,
    logout: logoutReducers,
    deleteuser: deleteuserReducers,
    // auth: authReducers,
  },
});

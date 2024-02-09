import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../Controllers/UserProfile/profile.js"; // Import new controllers for user profiles
import isAuth from "../Middlewares/isAuth.js";
import upload from "../Middlewares/multer.js";

const router = express.Router();

//Route for get user profile
router.route("/profile").get(isAuth, getUserProfile);

//Route for update user profile
router.route("/updateProfile").post(isAuth,upload.single('userphoto'), updateUserProfile);

export default router;

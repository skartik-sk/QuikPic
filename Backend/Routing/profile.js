import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../Controllers/UserProfile/profile.js"; // Import new controllers for user profiles
import isAuth from "../Middlewares/isAuth.js";
import upload from "../Middlewares/multer.js";
const router = express.Router();
router.route("/profile").get(isAuth, getUserProfile);
router.route("/updateProfile").post(isAuth,upload.single('userphoto'), updateUserProfile);
export default router;

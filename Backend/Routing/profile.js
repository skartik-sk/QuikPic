import express from 'express'
import { getUserProfile, updateUserProfile } from '../Controllers/UserProfile/profile.js'; // Import new controllers for user profiles
import isAuth from '../Middlewares/isAuth.js';
const router = express.Router();
router.route('/profile').get(isAuth, getUserProfile); 
router.route('/updateProfile').put(isAuth, updateUserProfile);
export default router;
import express from 'express'
import isAuth from '../Middlewares/isAuth.js';
import { getPost } from '../Controllers/UserFeeds/postByFollower.js';
import { follow, unfollow } from '../Controllers/UserFeeds/follow.js';
import { getUserProfile, updateUserProfile } from '../Controllers/UserProfile/profile.js'; // Import new controllers for user profiles

const router = express.Router();

router.route('/').get(isAuth, getPost);

// Routes for following/unfollowing users
router.route('/unfollow/:ids').put(isAuth, unfollow);
router.route('/follow/:ids').put(isAuth, follow);

// Routes for user profile
// Get user profile
//  // Update user profile


export default router;
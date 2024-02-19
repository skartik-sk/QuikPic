import express from 'express'
import isAuth from '../Middlewares/isAuth.js';
import { getPost } from '../Controllers/UserFeeds/postByFollower.js';
import { follow, getFollowers, unfollow } from '../Controllers/UserFeeds/follow.js';

const router = express.Router();

router.route('/').get(isAuth, getPost);

// Routes for following/unfollowing users
router.route('/unfollow/:ids').put(isAuth, unfollow);
router.route('/follow/:ids').put(isAuth, follow);
router.route('/getFollowers/').get(isAuth,getFollowers );

export default router;
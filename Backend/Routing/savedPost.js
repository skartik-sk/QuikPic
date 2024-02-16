import express from 'express';
import isAuth from '../Middlewares/isAuth.js';
import { savePost, getSavedPosts } from '../Controllers/post/savedPostController.js';

const router = express.Router();

// Save a post
router.route('/:id/saveAPost').post(isAuth, savePost);

// Retrieve saved posts for a user
router.route('/:id/getSavedPosts').get(getSavedPosts);

export default router;


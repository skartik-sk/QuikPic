import express from 'express';
import upload from '../Middlewares/multer.js';
import { deletePost, getAllPosts, getPostById, getUserPost, posting, updatePost } from '../Controllers/post/postController.js';
import isAuth from '../Middlewares/isAuth.js';
import { addComment, deleteComment } from '../Controllers/post/comment.js';
import { addLikeToPost } from '../Controllers/post/like.js';
import { getSavedPosts, savePost } from '../Controllers/post/savedPostController.js';

const router = express.Router();
router.route('/' ).post(isAuth,upload.single('photo'), posting);
router.route('/:id/caption').put(isAuth, updatePost)
router.route('/:id').delete(isAuth, deletePost);
router.route('/').get(isAuth, getAllPosts);
router.route('/:id').get(isAuth, getPostById);
router.route('/:id/comment').put(isAuth, addComment);
router.route('/:id/delcomment/:commentId').put(isAuth, deleteComment);
router.route('/:id/like').put(isAuth, addLikeToPost);
// router.route('/:id/dislike').put(isAuth, unLikeToPost);

// Save a post
router.route('/:id/saveAPost').post(isAuth, savePost);

// Retrieve saved posts for a user
router.route('/getSavedPosts').get(isAuth,getSavedPosts);
router.route('/getUserPosts').get(isAuth,getUserPost);

export default router;

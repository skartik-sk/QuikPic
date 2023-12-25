import express from 'express';
import upload from '../Middlewares/multer.js';
import { deletePost, getAllPosts, getPostById, posting, updatePost } from '../Controllers/post/postController.js';
import isAuth from '../Middlewares/isAuth.js';

const router = express.Router();
router.route('/' ).post(isAuth,upload.single('photo'), posting);
router.route('/:id').put(isAuth, updatePost)
router.route('/:id').delete(isAuth, deletePost);
router.route('/').get(isAuth, getAllPosts);
router.route('/:id').get(isAuth, getPostById);

export default router;
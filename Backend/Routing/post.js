import express from 'express';
import upload from '../Middlewares/multer.js';
import { posting } from '../Controllers/post/postController.js';
import isAuth from '../Middlewares/isAuth.js';

const router = express.Router();
router.route('/' ).post(isAuth,upload.single('photo'), posting);
// Update an existing post 
router.put('/:id', (req, res) => {
    // Code to update a post with the specified ID
});

// Delete a post
router.delete('/:id', (req, res) => {
    // Code to delete a post with the specified ID
});

// Fetch all posts
router.get('/', (req, res) => {
    // Code to fetch all posts
});

// Fetch a specific post by ID
router.get('/:id', (req, res) => {
    // Code to fetch a post with the specified ID
});
export default router;
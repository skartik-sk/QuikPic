import express from 'express';

import { login,signup,logout } from '../Controllers/Authentication/authController.js';
import isAuth from '../Middlewares/isAuth.js';
const router = express.Router();


// Login
router.route('/login' ).post(isAuth,login);

// Signup
router.route('/signup').post(signup);

// Signout
router.route('/signout').post(login);

export default router;

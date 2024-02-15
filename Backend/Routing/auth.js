import express from 'express';

import { login,signup,logout } from '../Controllers/Authentication/authController.js';
import isAuth from '../Middlewares/isAuth.js';
import { forgotPassword, resetPassword } from '../Controllers/Authentication/password.js';
const router = express.Router();


// Login
router.route('/login' ).post(login);

// Signup
router.route('/signup').post(signup);

// Signout
router.route('/logout').get(isAuth,logout);

// Forgot password
router.route('/forgotPassword').post(forgotPassword);

// Reset password
router.route('/resetPassword/:id/:token').post(resetPassword);

export default router;

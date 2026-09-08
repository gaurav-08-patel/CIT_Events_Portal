// Routes for user registration and authentication flow

import express from 'express';
import { register, login, logout, forgotPassword, resetPassword, emailVerification } from '../controllers/authController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({status: "ok", message:"This is Auth Endpoint."})
})

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/verify-email', emailVerification);

export default router;

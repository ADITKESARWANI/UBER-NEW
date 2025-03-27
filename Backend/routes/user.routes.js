const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userControllers = require('../controllers/user.controllers.js');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 6}).withMessage('first name must be at least 6 chars... long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars... long'),
],
    userControllers.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 chars... long'),
],

    userControllers.loginUser)

    router.get('/profile',authMiddleware.authUser, userControllers.getUserProfile)
    
    router.get('/logout',authMiddleware.authUser, userControllers.logoutUser)

module.exports = router;
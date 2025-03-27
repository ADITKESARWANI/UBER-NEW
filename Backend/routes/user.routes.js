const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userControllers = require('../controllers/user.controllers.js');


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

module.exports = router;
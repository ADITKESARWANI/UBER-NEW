const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const authMiddleware = require('../middleware/auth.middleware');


router.post('/register', [
    body('fullname.firstname').isLength({ min: 6 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('vehical.color').isLength({ min: 6 }),
    body('vehical.plate').isLength({ min: 3 }),
    body('vehical.capacity').isLength({ min: 1 }),
    body('vehical.vehicalType').isIn(['car', 'motorcycle', 'auto']),
], 
    captainController.registercaptain
)


router.post('/login' [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainprofile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;
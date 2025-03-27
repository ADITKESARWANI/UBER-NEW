const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')


router.post('/register', [
    body('fullname.firstname').isLength({ min: 6 }),
    body('fullname.lastname').isLength({ min: 6 }),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('vehical.color').isLength({ min: 6 }),
    body('vehical.plate').isLength({ min: 3 }),
    body('vehical.capacity').isLength({ min: 1 }),
    body('vehical.vehicalType').isIn(['car', 'motorcycle', 'auto']),
], 
    captainController.registercaptain
)



module.exports = router;
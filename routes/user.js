const express = require('express');


const {authenticateUser} = require('../middlewares/authentication');


const userController = require('../controllers/userController');

const router = express.Router();


// Public Routes
router.get('/', userController.register);
router.post('/login', userController.login);


//Private Routes

router.get('/test', authenticateUser, userController.test);




module.exports = router;

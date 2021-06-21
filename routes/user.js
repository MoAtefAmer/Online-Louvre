const express = require('express');


const {authenticateUser} = require('../middlewares/authentication');


const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.register);

router.post('/login', userController.login);

router.get('/test', authenticateUser, userController.test);

module.exports = router;

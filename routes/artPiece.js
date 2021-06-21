const express = require('express');
const {uploadImage} = require('../middlewares/uploadImage')


const {authenticateUser} = require('../middlewares/authentication');


const router = express.Router();

const artPieceController = require('../controllers/artPieceController')



//Private Routes
router.post('/addNewArtPiece',authenticateUser,uploadImage,artPieceController.addNewArtPiece)

router.get('/getAllArt',authenticateUser,artPieceController.getAllArt)



module.exports = router;
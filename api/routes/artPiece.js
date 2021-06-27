const express = require('express');
const {uploadImage} = require('../middlewares/uploadImage')


const {authenticateUser} = require('../middlewares/authentication');


const router = express.Router();

const artPieceController = require('../controllers/artPieceController')



//Private Routes
router.post('/addNewArtPiece',authenticateUser,uploadImage,artPieceController.addNewArtPiece)

router.get('/getAllArt',authenticateUser,artPieceController.getAllArt)

router.delete('/deleteArtPiece',authenticateUser,artPieceController.deleteArtPiece)

router.put('/editArtPieceInfo',authenticateUser,artPieceController.editArtPieceInfo)

router.put('/editArtPiecePhoto',authenticateUser,uploadImage,artPieceController.editArtPiecePhoto)


module.exports = router;
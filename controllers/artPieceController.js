const { ArtPiece } = require('../models/ArtPiece');
const fs = require('fs');
const cloudinary = require('../middlewares/cloudinaryConfig');
const newArtPieceValidation = require('../validation/newArtPieceValidation');

const addNewArtPiece = async (req, res) => {
  const userRole = req.user.userRole;

  if (userRole != 'ADMIN') {
    return res
      .status(401)
      .send({ message: 'Unauthorized Access! Must have admin privileges' });
  }

  if (!req.file)
    return res
      .status(404)
      .send({ message: 'please choose a suitable file to upload' });

      const reqData = {
        artist: req.body.artist,
        description: req.body.description,
        picture: '',
        name: req.body.name,
      };

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    reqData.picture =result.secure_url
    
  } catch (ex) {
    console.log(ex)
  }

  

  const validationErrors = newArtPieceValidation.validate(reqData);
  if (validationErrors) {
    return res.status(400).send({
      message: 'Wrong Input',
      error: validationErrors,
    });
  }

  let newArtPiece = new ArtPiece({
    picture: reqData.picture,
    artist: reqData.artist,
    description: reqData.description,
    name: reqData.name,
  });

  await newArtPiece.save();

  return res.send({ message: 'Art Piece added!' });
};

const getAllArt = async (req, res) => {
  const { pageLimit, pageNumber } = req.query;

  if (!pageLimit)
    return res.status(400).send({ message: 'Please provide the page size!' });
  if (!pageNumber)
    return res.status(400).send({ message: 'Please provide the page number!' });

  const offset = (pageNumber - 1) * pageLimit;

  const docCount = await ArtPiece.countDocuments();

const count = Math.ceil(docCount/pageLimit)

  const allPieces = await ArtPiece.find()
    .limit(parseInt(pageLimit))
    .skip(offset);

  return res.status(200).send({ allPieces, count });
};

const deleteArtPiece = async (req, res) => {
  const { id } = req.body;

  // Checking if art piece exists in db
  const checkArtPiece = await ArtPiece.findById(id);
  if (!checkArtPiece)
    return res.status(404).send({ message: 'Art Piece does not exist!' });

  // Deleting image attached to art piece
  const picPath = checkArtPiece.picture;
  fs.unlink(picPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  // Deleting art piece from db
  await ArtPiece.findByIdAndDelete(id);

  return res.status(200).send({ message: 'Art Piece removed!' });
};

const editArtPieceInfo = async (req, res) => {
  const { userRole } = req.user;
  const { id } = req.body;

  if (userRole != 'ADMIN') {
    return res
      .status(401)
      .send({ message: 'Unauthorized Access! Must have admin privileges' });
  }

  // Checking if art piece exists in db
  let checkArtPiece = await ArtPiece.findById(id);

  if (!checkArtPiece)
    return res.status(404).send({ message: 'Art Piece does not exist!' });

  const { artist, description, name } = req.body;

  if (artist && artist.length > 0) checkArtPiece.artist = artist;

  if (description && description.length > 0)
    checkArtPiece.description = description;

  if (name && name.length > 0) checkArtPiece.name = name;

  await checkArtPiece.save();

  return res.send({ message: 'Art Piece info edited successfully!' });
};

const editArtPiecePhoto = async (req, res) => {
  const { userRole } = req.user;
  const { id } = req.body;

  if (userRole != 'ADMIN') {
    return res
      .status(401)
      .send({ message: 'Unauthorized Access! Must have admin privileges' });
  }

  // Checking if art piece exists in db
  const checkArtPiece = await ArtPiece.findById(id);
  if (!checkArtPiece)
    return res.status(404).send({ message: 'Art Piece does not exist!' });

  if (!req.file)
    return res
      .status(404)
      .send({ message: 'please choose a suitable file to upload' });

  // Deleting image attached to art piece
  const picPath = checkArtPiece.picture;
  fs.unlink(picPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  if (req.file.path) checkArtPiece.picture = req.file.path;

  await checkArtPiece.save();

  return res.status(200).send({ message: 'Photo edited Successfully!' });
};

module.exports = {
  addNewArtPiece,
  getAllArt,
  deleteArtPiece,
  editArtPieceInfo,
  editArtPiecePhoto,
};

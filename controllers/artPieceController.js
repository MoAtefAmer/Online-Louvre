const { uploadImage } = require('../middlewares/uploadImage');
const { ArtPiece } = require('../models/ArtPiece');

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
    picture: req.file.path,
  };

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
  });

  await newArtPiece.save();

  return res.send({ message: 'Art Piece added!' });
};

const getAllArt = async (req, res) => {

  const { pageLimit, pageNumber } = req.query;
  const offset = (pageNumber - 1) * pageLimit;

  const allPieces = await ArtPiece.find().limit(parseInt(pageLimit)).skip(offset);

  return res.status(200).send(allPieces);
};

module.exports = { addNewArtPiece, getAllArt };

const mongoose = require('mongoose');

const artPieceSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
    minlength: 1,
  },

  artist: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },

  description: { type: String, required: true, minlength: 1, maxlength: 1024 },

  name:{type:String,required:true,minlength:1,maxlength:50},
});

const ArtPiece = mongoose.model('ArtPiece', artPieceSchema);

module.exports = { ArtPiece };

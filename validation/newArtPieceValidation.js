const { validator } = require('./requestDataValidator');

const newArtPieceSchemaAjv = {
  required: ['picture', 'artist', 'description'],
  properties: {
   
    artist:{
        type:'string',
        minLength:1,
        maxLength:50,
    },
    description:{
        type:'string',
        minLength:1,
        maxLength:1024,

    },
    picture:{
            type:'string',
            minLength:1,
    }
  },
};

function validateNewArtPiece(newArtPiece) {
  return validator(newArtPiece, newArtPieceSchemaAjv, []);
}

module.exports = {
  validate: validateNewArtPiece,
};

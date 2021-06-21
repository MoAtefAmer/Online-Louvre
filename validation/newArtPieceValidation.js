const { validator } = require('./requestDataValidator');

const newArtPieceSchemaAjv = {
  required: ['picture', 'artist', 'description', 'name'],
  properties: {
    artist: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 1024,
    },
    picture: {
      type: 'string',
      minLength: 1,
    },
    name: { type: 'string', minLength: 1, maxLength: 50 },
  },
};

function validateNewArtPiece(newArtPiece) {
  return validator(newArtPiece, newArtPieceSchemaAjv, []);
}

module.exports = {
  validate: validateNewArtPiece,
};

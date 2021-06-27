const { validator } = require('./requestDataValidator');

const loginSchemaAjv = {
  required: ['username', 'password'],
  properties: {
    username: {
      type: 'string',
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
      minLength: 5,
      maxLength: 100,
    },
    password: {
      type: 'string',
      minLength: 8,
    },

  },
};

function validateLogin(login) {
  return validator(login, loginSchemaAjv, []);
}

module.exports = {
  validate: validateLogin,
};

const { validator } = require('./requestDataValidator');

const registerSchemaAjv = {
  required: ['username', 'password', 'userRole', 'phone'],
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
    userRole: {
      type: 'string',
      enum: ['ADMIN', 'GUEST'],
    },
    phone: {
      required: ['code', 'number'],
      properties: {
        code: {
          type: 'string',
          minLength: 2,
          maxLength: 2,
          pattern: '^[0-9]{1,2}[:.,-]?$',
        },
        number: { type: 'string', pattern: '^01[0-2|5]{1}[0-9]{8}$' },
      },
    },
  
  },
};

function validateRegister(register) {
  return validator(register, registerSchemaAjv, []);
}

module.exports = {
  validate: validateRegister,
};

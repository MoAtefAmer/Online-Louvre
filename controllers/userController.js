const { User } = require('../models/User');
const bcrypt = require('bcryptjs');
const registerValidation = require('../validation/registerValidation');
const loginValidation = require('../validation/loginValidation');
const jwt = require('jsonwebtoken');

require('dotenv').config();

require('../middlewares/authentication');

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

const register = async (req, res) => {
  //TODO: email validation (if there is time)

  const { username, password, phone, userRole } = req.body;
  const reqData = req.body;

  // Validating input of request body
  const validationErrors = registerValidation.validate(reqData);
  if (validationErrors) {
    return res.status(400).send({
      message: 'Wrong registration Input',
      error: validationErrors,
    });
  }

  // Checking if username is already in DB
  const user = await User.findOne({ username });
  if (user)
    return res.status(400).send({ message: 'Username already exists!' });

  // Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Checking if phone number is unique
  const phoneCheck = await User.findOne({ phone }).select('-password');
  
  if (phoneCheck)
    return res.status(401).send({ message: 'Phone number already exists!' });

  // Creating new user in DB
  let newUser = new User({
    username,
    password: hashPassword,
    phone,
    userRole,
  });

  await newUser.save();

  return res.status(200).send({ message: 'Registration completed!' });
};

const login = async (req, res) => {
  const reqData = req.body;
  const { username, password } = reqData;

  // Validating input of request body
  const validationErrors = loginValidation.validate(reqData);
  if (validationErrors) {
    return res.status(400).send({
      message: 'Wrong email or password format!',
      error: validationErrors,
    });
  }

  // Checking if account exists
  const user = await User.findOne({ username });
  if (!user)
    return res.status(404).send({ message: 'Account does not exist!' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(403).send({ message: 'Wrong Password!' });

  const token = jwt.sign(
    { id: user._id, username: user.username, userRole: user.userRole },
    jwtPrivateKey,
    { expiresIn: 3600 } // expires in an hour
  );

  res.status(200).send({ message: 'Welcome!', token });
};

const test = async (req, res) => {
 

  return res.send('You authenticated!');
};

module.exports = { register, login, test };

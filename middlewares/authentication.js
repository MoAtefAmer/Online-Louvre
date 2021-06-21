const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const { User } = require('../models/User');

require('dotenv').config();

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;



passport.use(
  new JWTStrategy(
    {
      secretOrKey: jwtPrivateKey,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },

    async (token, done) => {
      try {
        const user = await User.findById(token.id).select("-password");
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

       
        
        return done(null, user);
      } catch (err) {
        
        return done(err);
      }
    }
  )
);


const authenticateUser = passport.authenticate("jwt",{session:false});

module.exports ={authenticateUser}
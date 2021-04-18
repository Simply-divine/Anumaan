const passport = require('passport');
const { StatusCodes } = require('http-status-codes');

const passportJWT = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: 'Unauthorized user' });
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = passportJWT;

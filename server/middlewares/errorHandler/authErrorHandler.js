const { StatusCodes } = require('http-status-codes');
const User = require('../../models/User');

const signupErrorHandler = async (req, res, next) => {
  // check for username or email conflicts
  try {
    const findWithEmail = await User.findOne({ email: req.body.email });
    if (findWithEmail) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ error: `Email Already Exists` });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = { signupErrorHandler };

const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

/**
 * @desc    signup user
 * @route   post /api/users/auth/signup
 * @access  public
 */
const signup = async (req, res) => {
  const { body } = req;

  try {
    const user = new User({
      ...body,
    });
    const savedUser = await user.save();

    const token = jwt.sign(savedUser.toJSON(), process.env.JWT_TOKEN_SECRET, {
      expiresIn: '2h',
    });

    return res
      .cookie('jwt', token, {
        maxAge: 2 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      })
      .send({ data: savedUser.toJSON() });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Something went wrong while user signup' });
  }
};

/**
 * @desc    login user
 * @route   post /api/users/auth/login
 * @access  public
 */
const login = async (req, res) => {
  const findUser = await User.findOne({
    email: req.body.email,
  });

  if (!findUser)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: 'Email Does not exists!!' });

  const validPassword = await findUser.isValidPassword(req.body.password);
  if (!validPassword)
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ error: 'Password is incorrect' });

  const token = jwt.sign(findUser.toJSON(), process.env.JWT_TOKEN_SECRET, {
    expiresIn: '2h',
  });

  return res
    .status(StatusCodes.OK)
    .cookie('jwt', token, {
      maxAge: 2 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    })
    .send({
      data: findUser.toJSON(),
    });
};

/**
 * @desc    logout user
 * @route   get /api/users/auth/logout
 * @access  private
 */
const logout = async (req, res) => {
  req.logOut();
  res
    .status(StatusCodes.OK)
    .clearCookie('jwt')
    .json({ data: 'logged out successfully!' });
};

/**
 * @desc    To check authentication status
 * @route   GET /api/users/auth/check-auth
 * @access  private
 */
const checkAuth = (req, res) => {
  res.status(StatusCodes.OK).json({ data: req.user });
};

module.exports = { signup, login, checkAuth, logout };

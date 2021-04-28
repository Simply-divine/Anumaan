const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');

/**
 *
 * @desc To get current user
 * @route GET /api/users/me
 * @access private
 */
const getCurrentUser = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select('-password');
    if (!user)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'User not found' });
    return res.status(StatusCodes.OK).json({ data: user });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: `something went wrong in getting current user` });
  }
};

/**
 *
 * @desc To add scores
 * @route POST /api/users/user/scores
 * @access private
 */
const addScore = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select('-password');
    if (!user)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'User not found' });
    console.log('Max score', req.body.data);
    const score = req.body.data;
    if (user.max_score < score) {
      user.max_score = score;
    }
    user.scores.push(score);
    await user.save();
    return res.status(StatusCodes.OK).json({
      data: {
        max_score: user.max_score,
        score,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: `something went wrong in getting current user` });
  }
};

/**
 *
 * @desc To get all users
 * @route POST /api/users
 * @access private
 */
const allUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    if (!users)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'Users not found' });
    return res.status(StatusCodes.OK).json({ data: users });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: `something went wrong in getting all users` });
  }
};

module.exports = { getCurrentUser, addScore, allUsers };

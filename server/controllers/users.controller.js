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

module.exports = getCurrentUser;

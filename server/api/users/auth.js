const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const User = require('../../models/User');

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

const login = async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });

  if (!findUser)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: 'Email Does not exists!!' });

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

module.exports = { signup, login };

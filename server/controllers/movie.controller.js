const { StatusCodes } = require('http-status-codes');
const http = require('../utils/httpInstance');

/**
 *
 * @desc To get current user
 * @route GET /api/movies/
 * @access private
 */
const getAllMovies = async (req, res) => {
  try {
    let { data } = await http.get(`/discover/movie`);
    return res.status(StatusCodes.OK).json({
      data,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: `Something went wrong in getting all movies` });
  }
};

/**
 *
 * @desc To get new movie
 * @route GET /api/movies/change
 * @access private
 */
const changeMovie = async (req, res) => {
  try {
    let { data: movies } = await http.get('discover/movie');
    const movie = await movies.results[
      Math.floor(Math.random() * movies.results.length)
    ];
    console.log(movie.title);
    return res.status(StatusCodes.OK).json({
      data: {
        name: movie.title,
        path: movie.backdrop_path,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: `Something went wrong in change movie` });
  }
};
module.exports = { changeMovie, getAllMovies };

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { config } = require('dotenv');
config();
require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const api = require('./api');
const passport = require('passport');
const app = express();
const cookieParser = require('cookie-parser');

app.set('trust proxy', 1);
app.use(morgan('dev'));
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄🍔',
  });
});

// passport authentication
require('./middlewares/auth/passportAuth');
app.use(passport.initialize());
app.use('/api', api);

app.use(errorHandler.notFound);
app.use(errorHandler.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
});

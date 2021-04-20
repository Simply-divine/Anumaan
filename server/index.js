const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { config } = require('dotenv');
config();
require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const api = require('./routes');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const app = express();
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

// passport authentication middleware
require('./middlewares/auth/passportAuth');
app.use(passport.initialize());

// API
app.use('/api', api);

// errorHandler middleware
app.use(errorHandler.notFound);
app.use(errorHandler.errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`);
});

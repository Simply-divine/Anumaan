const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
const connectDB = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log(err);
    console.log('Failed to connect to database');
  });

module.exports = connectDB;

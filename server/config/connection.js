const mongoose = require('mongoose');
// connect to database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/steepdreams',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;

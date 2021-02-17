const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/animo-sys';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

/**
 * Connects to the database
 */
module.exports = async () => {
  try {
    await mongoose.connect(url, options);
    console.log(`Connected at ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

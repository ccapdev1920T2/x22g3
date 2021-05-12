const mongoose = require("mongoose");

const url =
  process.env.NODE_ENV === "development"
    ? process.env.MONGODB_URL
    : process.env.MONGODB_URL_REMOTE;

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
    console.log(
      `Connected at ${mongoose.connection.host}/${mongoose.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

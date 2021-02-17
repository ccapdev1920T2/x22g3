const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/animo-sys';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// const connection = await mongoose.createConnection(url, options);

module.exports = async () => {
  // let connection;

  try {
    await mongoose.connect(url, options);
    console.log(`connected at ${url}`);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }

  // return connection;
};

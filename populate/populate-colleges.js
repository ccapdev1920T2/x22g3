const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Colleges = require('../models/College');
const connect = require('../config/db-config');

/**
 * Populates the college collection in the database.
 * This is called in ./index.js
 */
module.exports = async () => {
  try {
    // read colleges.json file contents
    console.log('Reading colleges.json...');
    const buffer = fs.readFileSync(
      path.resolve(__dirname, '../data/colleges.json'),
    );
    console.log('Successfully read file contents.');

    console.log('Converting buffer to object...');
    const colleges = JSON.parse(buffer);
    console.log('Successfully converted.');

    // connect to db
    console.log('Connecting to database...');
    await connect();

    // loop through each college
    for (let i = 0; i < colleges.length; i++) {
      const college = colleges[i];

      const savedCollege = await Colleges.findOne({
        name: college.name,
        code: college.code,
      });

      if (savedCollege) {
        console.log(`Skipping ${college.name}`);
      } else {
        console.log('Creating college...');
        await Colleges.create(college);
        console.log('College created.');
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

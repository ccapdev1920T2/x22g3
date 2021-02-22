const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Scholarships = require('../models/Scholarship');
const connect = require('../config/db-config');

/**
 * Populates the scholarship collection in the database.
 * This is called in ./index.js
 */
module.exports = async () => {
  try {
    // read scholarships.json file contents
    console.log('Reading accounts.json...');
    const buffer = fs.readFileSync(
      path.resolve(__dirname, '../data/scholarships.json'),
    );
    console.log('Successfully read file contents.');

    console.log('Converting buffer to object...');
    const scholarships = JSON.parse(buffer);
    console.log('Successfully converted.');

    // connect to db
    console.log('Connecting to database...');
    await connect();

    // loop through each scholarship
    for (let i = 0; i < scholarships.length; i++) {
      const scholarship = scholarships[i];

      const savedScholarship = await Scholarships.findOne({
        name: scholarship.name,
      });

      if (savedScholarship) {
        console.log(`Skipping scholarship ${scholarship.name}`);
      } else {
        console.log('Creating scholarship...');
        await Scholarships.create(scholarship);
        console.log('Scholarship created.');
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
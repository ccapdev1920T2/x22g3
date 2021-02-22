const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const PreEnlistment = require('../models/PreenlistmentCourse');
const connect = require('../config/db-config');

/**
 * Populates the pre-enlistment courses collection in the database.
 * This is called in ./index.js
 */
module.exports = async () => {
  try {
    // read preenlistment-courses.json file contents
    console.log('Reading preenlistment-courses.json...');
    const buffer = fs.readFileSync(
      path.resolve(__dirname, '../data/preenlistment-courses.json'),
    );
    console.log('Successfully read file contents.');

    console.log('Converting buffer to object...');
    const courses = JSON.parse(buffer);
    console.log('Successfully converted.');

    // connect to db
    console.log('Connecting to database...');
    await connect();

    // loop through each course
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];

      const savedCourse = await PreEnlistment.findOne({
        courseCode: course.courseCode
      });

      if (savedCourse) {
        console.log(`Skipping course ${course.courseCode}`);
      } else {
        console.log('Creating course...');
        await PreEnlistment.create(course);
        console.log('Course created.');
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
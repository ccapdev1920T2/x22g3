const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Course = require('../models/Course');
const connect = require('../config/db-config');
const TermDetail = require('../models/TermDetail');

/**
 * Populates the courses collection in the database.
 * This is called in ./index.js
 */
 module.exports = async () => {
    try {
      // read Courses.json file contents
      console.log('Reading courses.json...');
      const buffer = fs.readFileSync(
        path.resolve(__dirname, '../data/Courses.json'),
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
        
        const savedCourse = await Course.findOne({
          courseCode: course.courseCode,
          section: course.section
        });
  
        if (savedCourse) {
          console.log(`Skipping ${course.courseCode}, section ${course.section}`);
        } else {
          console.log('Creating course...');
          const detail = (course.termOffered).split("/");
          const savedTerm = await TermDetail.findOne({
            academicYear: detail[0],
            term: detail[1]
          });

          if (!savedTerm) throw new Error("term not found");

          course.termOffered = savedTerm._id;

          await Course.create(course);
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
  
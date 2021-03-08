const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const Account = require("../models/Account");
const Student = require("../models/Student");
const connect = require("../config/db-config");
const { salt } = require("../config/bcrypt-config");

/**
 * Populates the students collection in the database.
 * This is called in ./index.js
 */
module.exports = async () => {
  try {
    // read students-temp.json file contents
    console.log("Reading students-temp.json...");
    const buffer = fs.readFileSync(
      path.resolve(__dirname, "../data/students-temp.json")
    );
    console.log("Successfully read file contents.");

    console.log("Converting buffer to object...");
    const students = JSON.parse(buffer);
    console.log("Successfully converted.");

    // connect to db
    console.log("Connecting to database...");
    await connect();

    // loop through each student
    for (let i = 0; i < students.length; i++) {
      const student = students[i];

      const savedStudent = await Student.findOne({
        idNum: student.idNum,
      });

      if (savedStudent) {
        console.log(`Skipping student with ID number ${student.idNum}`);
      } else {
        console.log("Creating student...");

        const savedAccount = await Account.findOne({
          username: student.account,
        });
        if (!savedAccount) throw new Error("account not found");

        student.account = savedAccount._id;

        await Student.create(student);
        console.log("Student created.");
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

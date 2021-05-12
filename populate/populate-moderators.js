const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Account = require("../models/Account");
const connect = require("../config/db-config");
const Moderator = require("../models/Moderator");

/**
 * Populates the moderators collection in the database.
 * This is called in ./index.js
 */
module.exports = async () => {
  try {
    // read moderators.json file contents
    console.log("Reading moderators.json...");
    const buffer = fs.readFileSync(
      path.resolve(__dirname, "../data/moderators.json")
    );
    console.log("Successfully read file contents.");

    console.log("Converting buffer to object...");
    const moderators = JSON.parse(buffer);
    console.log("Successfully converted.");

    // connect to db
    console.log("Connecting to database...");
    await connect();

    // loop through each student
    for (let i = 0; i < moderators.length; i++) {
      const moderator = moderators[i];

      const savedModerator = await Moderator.findOne({
        email: moderator.email,
      });

      if (savedModerator) {
        console.log(`Skipping moderator with email ${moderator.email}`);
      } else {
        console.log("Creating moderator...");

        const savedAccount = await Account.findOne({
          username: moderator.account,
        });
        if (!savedAccount) throw new Error("account not found");

        moderator.account = savedAccount._id;

        await Moderator.create(moderator);
        console.log("Moderator created.");
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

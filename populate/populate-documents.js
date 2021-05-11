const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Documents = require('../models/Document');
const connect = require('../config/db-config');

/**
 * Populates the documents collection in the database.
 * This is called in ./index.js
 */
module.exports = async () => {
  try {
    // read documents.json file contents
    console.log('Reading documents.json...');
    const buffer = fs.readFileSync(
      path.resolve(__dirname, '../data/documents.json'),
    );
    console.log('Successfully read file contents.');

    console.log('Converting buffer to object...');
    const documents = JSON.parse(buffer);
    console.log('Successfully converted.');

    // connect to db
    console.log('Connecting to database...');
    await connect();

    // loop through each account
    for (let i = 0; i < documents.length; i++) {
      const document = documents[i];

      const savedDocument = await Documents.findOne({
        document: document.document,
        requestedBy: document.requestedBy,
        requestDate: document.requestDate
      });

      if (savedDocument) {
        console.log(`Skipping account with document of ${document.requestedBy}`);
      } else {
        console.log('Document account...');
        
        await Documents.create(document);
        console.log('Document created.');
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

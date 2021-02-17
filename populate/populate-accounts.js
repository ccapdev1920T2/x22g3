const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const Account = require('../models/Account');
const connect = require('../config/db-config');
const { salt } = require('../config/bcrypt-config');

module.exports = async () => {
  try {
    // read accounts.json file contents
    console.log('Reading file...');
    const buffer = fs.readFileSync(
      path.resolve(__dirname, '../data/accounts.json'),
    );
    console.log('Successfully read file contents');

    console.log('Converting buffer to object...');
    const accounts = JSON.parse(buffer);
    console.log('Successfully converted.');

    // connect to db
    console.log('Connecting to database...');
    await connect();

    // loop through each account from json file
    for (let i = 0; i < accounts.length; i++) {
      const account = accounts[i];

      const savedAccount = await Account.findOne({
        username: account.username,
      });

      if (savedAccount) {
        console.log(`Skipping account with username ${account.username}`);
      } else {
        console.log('Creating account...');
        const { password, ...accountProps } = account;

        accountProps.password = await bcrypt.hash(password, salt);
        await Account.create(accountProps);
        console.log('Account created.');
      }
    }

    // close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

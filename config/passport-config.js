const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Account = require('../models/Account');

module.exports = passport => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const account = await Account.findOne({ username });
        if (!account) {
          return done(null, false, { message: 'Incorrect username' });
        }

        return (await bcrypt.compare(password, account.password))
          ? done(null, account)
          : done(null, false, { message: 'Incorrect password' });
      } catch (error) {
        return done(error);
      }
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const account = await Account.findById(id);
      done(null, account);
    } catch (error) {
      done(error);
    }
  });
};

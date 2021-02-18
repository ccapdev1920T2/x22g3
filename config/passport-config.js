const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const Account = require('../models/Account');

module.exports = passport => {
  passport.use(
    'local-moderator',
    new LocalStrategy(async (username, password, done) => {
      try {
        const info = { message: 'Invalid credentials' };
        const account = await Account.findOne({ username });
        if (!account) {
          return done(null, false, info);
        }

        if (account.type !== Account.getModeratorType()) {
          return done(null, false, info);
        }

        return (await bcrypt.compare(password, account.password))
          ? done(null, account)
          : done(null, false, info);
      } catch (error) {
        return done(error);
      }
    }),
  );

  passport.serializeUser((user, done) => {
    const key = {
      id: user.id,
      type: user.type,
    };
    done(null, key);
  });

  passport.deserializeUser(async (key, done) => {
    try {
      const account = await Account.findById(key.id);
      done(null, account);
    } catch (error) {
      done(error);
    }
  });
};

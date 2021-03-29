const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const Account = require("../models/Account");
const Student = require("../models/Student");
const Moderator = require("../models/Moderator");

module.exports = (passport) => {
  passport.use(
    "local-student",
    new LocalStrategy(async (username, password, done) => {
      try {
        const info = { message: "Invalid credentials" };
        const account = await Account.findOne({ username });
        if (!account) {
          return done(null, false, info);
        }
        if (account.type !== Account.getStudentType()) {
          return done(null, false, info);
        }

        return (await bcrypt.compare(password, account.password))
          ? done(null, account)
          : done(null, false, info);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.use(
    "local-moderator",
    new LocalStrategy(async (username, password, done) => {
      try {
        const info = { message: "Invalid credentials" };
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
    })
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
      let Model;

      if (key.type === Account.getStudentType()) Model = Student;
      else Model = Moderator;

      const user = await Model.findOne({ account: key.id })
        .populate("account", "-password")
        .exec();

      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

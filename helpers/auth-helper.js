const Account = require("../models/Account");

/**
 * Checks if the user is logged in.
 * Calls the next middleware if they are logged in,
 * otherwise redirects them to the login page.
 * Use this on routes that need authentication,
 * but doesn't necessarily need to know the user type.
 *
 * @param  req request
 * @param  res response
 * @param  next callback for next middleware
 */
exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  res.redirect("/login");
};

/**
 * Checks if the logged-in user is a moderator.
 * Calls the next middleware if they are a moderator,
 * otherwise redirects them to the login page.
 * Use this after `isAuth()`.
 *
 * @param  req request
 * @param  res response
 * @param  next callback for next middleware
 */
exports.isModerator = (req, res, next) => {
  if (req.user.account.type === Account.getModeratorType()) return next();

  res.redirect("/login");
};

/**
 * Checks if the logged-in user is a student.
 * Calls the next middleware if they are a student,
 * otherwise redirects them to the login page.
 * Use this after `isAuth()`.
 *
 * @param  req request
 * @param  res response
 * @param  next callback for next middleware
 */
exports.isStudent = (req, res, next) => {
  if (req.user.account.type === Account.getStudentType()) return next();

  res.redirect("/login");
};

exports.isAllowedAccess = (req, res, next) => {
  if (req.user.hasAccess) {
    return next();
  }

  res.send("You are not allowed to access Animo.sys");
};

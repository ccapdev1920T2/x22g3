const passport = require('passport');

/**
 * Checks if the credentials provided by the user is valid or not.
 * Redirects user to the login page if credentials are invalid,
 * otherwise redirects to the home page.
 * Use this on routes that need authentication.
 *
 * @param  req express Request object
 * @param  res express Response object
 * @param  next function to call the next middleware
 */
exports.isAuth = (req, res, next) => {
  passport.authenticate('local', (authErr, account, info) => {
    if (authErr) return next(authErr);

    if (!account) return res.send(info);

    req.login(account, loginErr => {
      if (loginErr) return next(loginErr);

      return res.redirect('/mod');
    });
  })(req, res, next);
};

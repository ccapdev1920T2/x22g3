/**
 * Checks if the user is logged in.
 * Calls the next middleware if they are logged in,
 * otherwise redirects them to the login page.
 * Use this on routes that need authentication.
 * @param  req request
 * @param  res response
 * @param  next callback for next middleware
 */
exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();

  res.redirect('/login');
};

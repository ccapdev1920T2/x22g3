/**
 * Logs out the current user.
 * Deletes the req.user property and clears the current session.
 * @param  req request
 * @param  res response
 */
exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect('/login');
};

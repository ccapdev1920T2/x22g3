const passport = require('passport');

/**
 * Renders the student login page.
 *
 * @param  req request
 * @param  res response
 */
exports.renderStudentLogin = (req, res) => {
  res.render('login', {
    layout: false,
    title: 'Login | Animo.sys',
  });
};

/**
 * Validates student login credentials.
 *
 * @param  req express Request object
 * @param  res express Response object
 * @param  next function to call the next middleware
 */
exports.postStudentLogin = (req, res, next) => {
  passport.authenticate('local-student', (authErr, account, info) => {
    if (authErr) return next(authErr);

    // if credentials are invalid, set the status code to 401 Unauthorized
    // and send the alert box HTML to be injected through the client
    if (!account) {
      return res
        .status(401)
        .render(
          'partials/alert',
          { layout: false, message: info.message },
          (err, html) => {
            if (err) console.log(err);
            else {
              res.send(html);
            }
          },
        );
    }

    // else, send an empty object to the client
    req.login(account, loginErr => {
      if (loginErr) return next(loginErr);

      return res.status(200).send({});
    });
  })(req, res, next);
};

/**
 * Renders the moderator login page.
 *
 * @param  req request
 * @param  res response
 */
exports.renderModeratorLogin = (req, res) => {
  res.render('login-mod', {
    layout: false,
    title: 'Login | Animo.sys',
  });
};

/**
 * Validates moderator login credentials.
 *
 * @param  req express Request object
 * @param  res express Response object
 * @param  next function to call the next middleware
 */
exports.postModeratorLogin = async (req, res, next) => {
  passport.authenticate('local-moderator', (authErr, account, info) => {
    if (authErr) return next(authErr);

    // if credentials are invalid, set the status code to 401 Unauthorized
    // and send the alert box HTML to be injected through the client
    if (!account) {
      return res
        .status(401)
        .render(
          'partials/alert',
          { layout: false, message: info.message },
          (err, html) => {
            if (err) console.log(err);
            else {
              res.send(html);
            }
          },
        );
    }

    // else, send an empty object to the client
    req.login(account, loginErr => {
      if (loginErr) return next(loginErr);

      return res.status(200).send({});
    });
  })(req, res, next);
};

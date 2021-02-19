const bcrypt = require('bcrypt');
const passport = require('passport');
const { salt } = require('../config/bcrypt-config');
const Account = require('../models/Account');

exports.login_student_landing_page_get = (req, res) => {
  console.log('login route');
  res.render('login', {
    layout: false,
    // addedStyles: ['sessions', 'forms'],
    title: 'Login | Animo.sys',
  });
};

exports.login_student_landing_page_post = (req, res) => {
  const DUMMY_ID_NUM = 11839864;
  const DUMMY_PASS = 'asdf';

  if (req.body.idNumber != DUMMY_ID_NUM || req.body.password != DUMMY_PASS) {
    var errMsg = 'Invalid ID Number/Password.';
    const { idNumber, password } = req.body;
    console.log(errMsg);
    console.log({ idNumber, password });
    res.render('login', {
      layout: 'sessions',
      addedStyles: ['sessions', 'forms'],
      title: 'Login | Animo.sys',
      data: { idNumber, password },
      errMsg: errMsg,
    });
  } else {
    console.log('success!');
    res.redirect('/home');
  }
};

exports.renderModeratorLogin = (req, res) => {
  res.render('login-mod', {
    layout: false,
    title: 'Login | Animo.sys',
  });
};

/**
 * Validates moderator login credentials.
 * Redirects moderator to the login page if credentials are invalid,
 * otherwise redirects to the home page.
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

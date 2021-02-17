const bcrypt = require('bcrypt');
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
  console.log('login mod route');
  res.render('login-mod', {
    layout: false,
    title: 'Login | Animo.sys',
  });
};

exports.postModeratorLogin = async (req, res) => {
  res.send('success')
  // try {
  //   const account = await Account.findOne({ username });

  //   if (account) {
  //     const isCorrectPassword = await bcrypt.compare(
  //       password,
  //       account.password,
  //     );
  //     isCorrectPassword
  //       ? res.send({ isCorrectPassword })
  //       : res.send({ message: 'invalid credentials' });
  //   } else res.send({ message: 'invalid credentials' });
  // } catch (error) {
  //   console.error(error);
  //   res.send(error);
  // }
};

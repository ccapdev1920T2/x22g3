const express = require('express');
const router = express.Router();

const {
  renderCartPage,
  renderEnrollmentCartPage,
  renderPreenlistmentCartPage,
} = require('../controllers/cartController');
const { isAuth, isStudent } = require('../helpers/auth-helper');

// TODO: /cart will redirect to either /cart/preenlistment or /cart/enrollment, whichever is active
router.get('/', isAuth, isStudent, renderCartPage);

router.get('/preenlistment', isAuth, isStudent, renderPreenlistmentCartPage);

// TODO: router.post('/preenlistment') from /preenlistment route

router.get('/enrollment', isAuth, isStudent, renderEnrollmentCartPage);

module.exports = router;

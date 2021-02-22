const express = require('express');
const router = express.Router();

const {
  renderPreenlistmentPage,
} = require('../controllers/preenlistmentController');
const { isAuth, isStudent } = require('../helpers/auth-helper');

router.get('/', isAuth, isStudent, renderPreenlistmentPage);

module.exports = router;

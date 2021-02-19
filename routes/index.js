const express = require('express');
const router = express.Router();

const { renderStudentHomepage } = require('../controllers/indexController');
const { isAuth } = require('../helpers/auth-helper');

router.get('/', isAuth, renderStudentHomepage);

module.exports = router;

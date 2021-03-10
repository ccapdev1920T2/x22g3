const express = require('express');
const router = express.Router();

const { renderStudentHomepage } = require('../controllers/indexController');
const { isAuth, isStudent } = require('../helpers/auth-helper');

router.get('/', isAuth, isStudent, renderStudentHomepage);

module.exports = router;

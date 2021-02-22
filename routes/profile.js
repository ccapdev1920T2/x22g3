const express = require('express');
const router = express.Router();

const { renderProfilePage } = require('../controllers/profileController');
const { isAuth, isStudent } = require('../helpers/auth-helper');

router.get('/', isAuth, isStudent, renderProfilePage);

module.exports = router;

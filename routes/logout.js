var express = require('express');
var router = express.Router();

var { logoutUser } = require('../controllers/logoutController');

router.get('/', logoutUser);

module.exports = router;

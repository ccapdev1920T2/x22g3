var express = require('express');
var router = express.Router();

var logout_controller = require('../controllers/logoutController');

router.get('/', logout_controller.logout_landing_page_get);

module.exports = router;
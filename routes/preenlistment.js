var express = require('express');
var router = express.Router();

var preenlistment_controller = require('../controllers/preenlistmentController');

router.get('/', preenlistment_controller.preenlisted_courses_list);

module.exports = router;
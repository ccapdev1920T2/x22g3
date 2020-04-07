var express = require('express');
var router = express.Router();

var profile_controller = require('../controllers/profileController'); 

router.get('/', profile_controller.student_detail);

module.exports = router;
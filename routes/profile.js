var express = require('express');
var router = express.Router();

var student_controller = require('../controllers/studentController'); 

router.get('/', student_controller.student_detail);

module.exports = router;
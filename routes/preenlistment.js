var express = require('express');
var router = express.Router();

var student_controller = require('../controllers/studentController');
var preenlisted_courses_controller = require('../controllers/preenlisted_coursesController');
var preenlist_course_controller = require('../controllers/preenlist_courseController');

router.get('/', preenlisted_courses_controller.preenlisted_courses_list);

module.exports = router;
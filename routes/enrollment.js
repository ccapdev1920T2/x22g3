var express = require('express');
var router = express.Router();

var student_controller = require('../controllers/studentController');
var course_controller = require('../controllers/courseController');
var request_controller = require('../controllers/requestController');

// /enrollment landing page, no need for controllers
router.get('/', (req, res) => {
    res.render('enrollment', {
        route: 'enrollment',
        title: 'Enrollment | Animo.sys',
        addedStyles: ['enrollment-styles']
    });
});

router.get('/classschedule', student_controller.student_class_schedule);

router.get('/addclass', student_controller.student_add_class);

router.get('/dropclass', (req, res) => {
    res.render('dropclass', {
        title: 'Drop a Class | Animo.sys'
    })
})

router.get('/dropclass_list', (req, res) => {
    res.render('dropclass_list', {
        title: 'List of Dropped Classes | Animo.sys',
        addedStyles: ['forms']
    })
})

router.get('/requestclass', request_controller.request_create_get);

router.get('/courseofferings', course_controller.course_offerings_list);

module.exports = router;
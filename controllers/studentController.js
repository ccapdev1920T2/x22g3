// REQUIRE MODELS AS NEEDED
var Student = require('../models/student');
var Course = require('../models/course');
var EnrolledCourses = require('../models/enrolled_courses');

// Display details for one student
exports.student_detail = (req, res) => {
    console.log('TODO: get data from Student');
    res.render('profile', {
        addedStyles: ['profile-styles'],
        title: 'Profile | Animo.sys'
    });
};


// Display class schedule for one student
exports.student_class_schedule = (req, res) => {
    console.log('TODO: get data from Student');
    res.render('classschedule', {
        title: 'Class Schedule | Animo.sys'
    })
};

// Add a Class
exports.student_add_class = (req, res) => {
    console.log('TODO: get data from Student, EnrolledCourses, and Course (to view available courses)');
    res.render('addclass', {
        title: 'Add a Class | Animo.sys'
    })
};
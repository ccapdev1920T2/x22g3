// REQUIRE MODELS AS NEEDED
var Course = require('../models/course');
var Student = require('../models/student');

// display course offerings list
exports.course_offerings_list = (req, res) => {
    console.log('TODO: get data from Course');
    res.render('courseofferings', {
        addedStyles: ['courseofferings-styles'],
        title: 'Course Offerings | Animo.sys'
    })
};


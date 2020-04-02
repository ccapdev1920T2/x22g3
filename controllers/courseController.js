// REQUIRE MODELS AS NEEDED
var Course = require('../models/course');

// display course offerings list
exports.course_offerings_list = (req, res) => {
    console.log('TODO: get data from Course');
    res.render('courseofferings', {
        addedStyles: ['forms'],
        title: 'Course Offerings | Animo.sys'
    })
};


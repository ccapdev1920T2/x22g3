var EnrolledCourses = require('../models/preenlisted_courses');

exports.enrolled_courses_detail = (req, res) => {
    console.log('TODO: get data from EnrolledCourses');
    res.render('cart_enrollment', {
        title: 'Enrollment Cart | Animo.sys',
        addedStyles: ['forms']
    });
};
// REQUIRE MODELS AS NEEDED
var PreenlistedCourses = require('../models/preenlisted_courses');
var PreenlistCourse = require('../models/preenlist_course');

// Respond to /cart/preenlistment
exports.preenlisted_courses_cart = (req, res) => {
    console.log('TODO: get data from PreenlistedCourses');
    res.render('cart_preenlistment', { title: 'Preenlistment Cart | Animo.sys' });
};


// Respond to /preenlistment
exports.preenlisted_courses_list = (req, res) => {
    res.render('preenlistment', {
        title: "Pre-enlistment | Animo.sys"
    });
}
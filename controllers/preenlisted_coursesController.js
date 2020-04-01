// REQUIRE MODELS AS NEEDED
var PreenlistedCourses = require('../models/preenlisted_courses');
var PreenlistCourse = require('../models/preenlist_course');

// Respond to /cart/preenlistment
exports.preenlisted_courses_cart = (req, res) => {
    console.log('TODO: get data from PreenlistedCourses');
    var data = [];

    for (let i = 0; i < req.query[Object.keys(req.query)[0]].length; i++) {
        var obj = {};
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                const el = req.query[key];
                obj[key] = el[i];
            }
        }

        data.push(obj);
    }

    console.log(data);
    res.render('cart_preenlistment', {
        title: 'Preenlistment Cart | Animo.sys',
        data: data
    });
};


// Respond to /preenlistment
exports.preenlisted_courses_list = (req, res) => {
    res.render('preenlistment', {
        title: "Pre-enlistment | Animo.sys"
    });
}
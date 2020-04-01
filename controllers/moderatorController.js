// REQUIRE MODELS AS NEEDED
var Moderator = require('../models/moderator');
var Student = require('../models/student');

// Respond to /mod GET request
exports.moderator_students_list = (req, res) => {
    console.log('TODO: get data from Moderator');
    res.render('index-mod', {
        layout: 'main-mod',
        addedStyles: ['index-mod-styles'],
        title: 'Home | Animo.sys'
    });

};

// Respond to /mod POST request, i.e. adding a new student
exports.moderator_create_student_post = (req, res) => {
    console.log('TODO: implement POST logic');
    res.render('index-mod', {
        layout: 'main-mod',
        addedStyles: ['index-mod-styles'],
        data: JSON.stringify(req.body),
        title: 'Home | Animo.sys'
    });
};


// Respond to /mod/settings GET request
exports.moderator_settings_detail = (req, res) => {
    res.render('settings-mod', {
        layout: 'main-mod',
        addedStyles: ['settings-mod-styles'],
        title: 'Settings | Animo.sys'
    });
};
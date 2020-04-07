var Student = require('../models/student');

// Display details for one student in the /profile route
exports.student_detail = (req, res) => {
    console.log('TODO: get data from Student');
    res.render('profile', {
        addedStyles: ['profile-styles'],
        title: 'Profile | Animo.sys',
        addedScripts: ['profile-script']
    });
};


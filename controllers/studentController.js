// REQUIRE MODELS AS NEEDED
var Student = require('../models/student');
var Course = require('../models/course');
var EnrolledCourses = require('../models/enrolled_courses');

var PDFDocument = require('pdfkit');
var fs = require('fs');

// TODO: implement
function printEAF(data) {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream('output.pdf'));
    doc.text('Some text', 100, 100);
    doc.end();
}

// Display details for one student in the /profile route
exports.student_detail = (req, res) => {
    console.log('TODO: get data from Student');
    res.render('profile', {
        addedStyles: ['profile-styles'],
        title: 'Profile | Animo.sys',
        addedScripts: ['profile-script']
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
        title: 'Add a Class | Animo.sys',
        addedStyles: ['forms']
    })
};
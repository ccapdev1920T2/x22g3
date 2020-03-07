var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('enrollment', {
        route: 'enrollment',
        title: 'Enrollment | Animo.sys',
        addedStyles: ['enrollment-styles']
    });
});

router.get('/classschedule', (req, res) => {
    res.render('classschedule', {
        title: 'Class Schedule | Animo.sys'
    })
})

router.get('/addclass', (req, res) => {
    res.render('addclass', {
        title: 'Add a Class | Animo.sys'
    })
})

router.get('/dropclass', (req, res) => {
    res.render('dropclass', {
        title: 'Drop a Class | Animo.sys'
    })
})

router.get('/dropclass_list', (req, res) => {
    res.render('dropclass_list', {
        title: 'List of Dropped Classes | Animo.sys'
    })
})

router.get('/requestclass', (req, res) => {
    res.render('requestclass', {
        title: 'Request a Class | Animo.sys'
    })
})

router.get('/courseofferings', (req, res) => {
    res.render('courseofferings', {
        addedStyles: ['courseofferings-styles'],
        title: 'Course Offerings | Animo.sys'
    })
})

module.exports = router;
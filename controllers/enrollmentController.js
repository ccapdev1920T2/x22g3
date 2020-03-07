var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('enrollment', {
        route: 'enrollment',
        title: 'Enrollment | Animo.sys',
        addedStyles: ['enrollment-styles']
    });
});

router.get('/classschedule', (req,res) => {
    res.render('classschedule', {
        title: 'Class Schedule | Animo.sys'
    })
})

router.get('/addclass', (req,res) => {
    res.render('addclass', {
        title: 'Add a Class | Animo.sys'
    })
})


module.exports = router;
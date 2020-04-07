var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', (req, res) => {
    console.log('login route');
    res.render('login', {
        layout: 'sessions',
        addedStyles: ['sessions', 'forms'],
        title: 'Login | Animo.sys'
    });
});

router.post('/', urlencodedParser, (req, res) => {
    const DUMMY_ID_NUM = 11839864;
    const DUMMY_PASS = 'asdf';

    if (req.body.idNumber != DUMMY_ID_NUM || req.body.password != DUMMY_PASS) {

        var errMsg = 'Invalid ID Number/Password.';
        const { idNumber, password } = req.body;
        console.log(errMsg);
        console.log({ idNumber, password });
        res.render('login', {
            layout: 'sessions',
            addedStyles: ['sessions', 'forms'],
            title: 'Login | Animo.sys',
            data: { idNumber, password },
            errMsg: errMsg
        });
    } else {
        console.log('success!');
        res.redirect('/home');
    }

});

router.get('/mod', (req, res) => {
    console.log('login mod route');
    res.render('login-mod', {
        layout: 'sessions',
        addedStyles: ['sessions', 'forms'],
        title: 'Login | Animo.sys'
    });
})

router.post('/mod', urlencodedParser, (req, res) => {
    var data = req.body;
    var errMsg = '';
    if (!data.idNumber || !data.password) {
        errMsg = "Invalid ID Number/Password.";
        res.render('login-mod', {
            layout: 'sessions',
            addedStyles: ['sessions', 'forms'],
            title: 'Login | Animo.sys',
            data: data,
            errMsg: errMsg
        });
    }
});

module.exports = router;
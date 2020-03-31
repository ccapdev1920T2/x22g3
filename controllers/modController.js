var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.render('index-mod', {
        layout: 'main-mod',
        addedStyles: ['index-mod-styles'],
        title: 'Home | Animo.sys'
    });

});

router.post('/', urlencodedParser, (req, res) => {
    res.render('index-mod', {
        layout: 'main-mod',
        addedStyles: ['index-mod-styles'],
        data: JSON.stringify(req.body),
        title: 'Home | Animo.sys'
    });
});

router.get('/settings', (req, res) => {
    res.render('settings-mod', {
        layout: 'main-mod',
        addedStyles: ['settings-mod-styles'],
        title: 'Settings | Animo.sys'
    });
});


module.exports = router;
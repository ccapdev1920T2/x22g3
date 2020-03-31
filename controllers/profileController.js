var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('profile', {
        addedStyles: ['profile-styles'],
        addedScripts: ['full-calendar'],
        title: 'Profile | Animo.sys'
    });
});

module.exports = router;
// REQUIRE MODELS AS NEEDED
var Request = require('../models/request');

// Create a new Request
exports.request_create_get = (req, res) => {
    res.render('requestclass', {
        title: 'Request a Class | Animo.sys',
        addedStyles: ['forms']
    })
};


exports.request_create_post = (req, res) => {
    console.log('TODO: create a new Request then update the Request collection');
    res.render('requestclass', {
        title: 'Request a Class | Animo.sys',
        addedStyles: ['sessions', 'forms']
    })
};
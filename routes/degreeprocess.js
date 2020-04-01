var express = require('express');
var router = express.Router();

var student_controller = require('../controllers/documentController');
var document_controller = require('../controllers/documentController');

router.get('/', (req, res) => {
    res.render('degree-process', {
        title: "Degree Process | Animo.sys"
    });
})

module.exports = router;
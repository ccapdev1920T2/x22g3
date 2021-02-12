var express = require('express');
var router = express.Router();

var { renderDegreeProcess } = require('../controllers/degreeProcessController');

router.get('/', renderDegreeProcess);

module.exports = router;

const express = require('express');
const router = express.Router();

const { renderDegreeProcess } = require('../controllers/degreeProcessController');

const { isAuth, isStudent } = require('../helpers/auth-helper');

router.get('/', isAuth, isStudent, renderDegreeProcess);



module.exports = router;

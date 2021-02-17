var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var login_controller = require('../controllers/loginController');
const { isAuth } = require('../helpers/auth-helper');


router.get('/', login_controller.login_student_landing_page_get);

router.post('/', urlencodedParser, login_controller.login_student_landing_page_post);

router.get('/mod', login_controller.renderModeratorLogin);

router.post('/mod', isAuth, login_controller.postModeratorLogin);

module.exports = router;
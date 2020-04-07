var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


var moderator_controller = require('../controllers/moderatorController');

router.get('/', moderator_controller.moderator_students_list);

// TODO: POST request to add a new student, will modify to redirect
router.post('/', urlencodedParser, moderator_controller.moderator_create_student_post);

router.get('/settings', moderator_controller.moderator_settings_detail);


module.exports = router;
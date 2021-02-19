var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mod_controller = require('../controllers/modController');
const { isAuth, isModerator } = require('../helpers/auth-helper');

// use authentication for all /mod routes
router.use(isAuth, isModerator);

router.get('/', mod_controller.renderModeratorHomepage);

// TODO: POST request to add a new student, will modify to redirect
router.post(
  '/',
  urlencodedParser,
  mod_controller.moderator_create_student_post,
);

router.get('/settings', mod_controller.moderator_settings_detail);

module.exports = router;

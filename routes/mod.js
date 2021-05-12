var express = require('express');
var router = express.Router();

var mod_controller = require('../controllers/modController');
const { isAuth, isModerator } = require('../helpers/auth-helper');

router.get('/', isAuth, isModerator, mod_controller.renderModeratorHomepage);

// TODO: POST request to add a new student, will modify to redirect
router.post(
  '/',
  isAuth,
  isModerator,
  mod_controller.moderator_create_student_post,
);

router.get(
  '/settings',
  isAuth,
  isModerator,
  mod_controller.moderator_settings_detail,
);

module.exports = router;

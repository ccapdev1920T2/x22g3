var express = require('express');
var router = express.Router();

var enrollmentController = require('../controllers/enrollmentController');
const { isAuth, isStudent } = require('../helpers/auth-helper');

// /enrollment landing page
router.get('/', isAuth, isStudent, enrollmentController.renderEnrollmentPage);

router.get(
  '/class-schedule',
  isAuth,
  isStudent,
  enrollmentController.renderClassSchedulePage,
);

router.get(
  '/add-class',
  isAuth,
  isStudent,
  enrollmentController.renderAddClassPage,
);

router.get(
  '/drop-class',
  isAuth,
  isStudent,
  enrollmentController.renderDropClassPage,
);

router.get(
  '/drop-class/checkout',
  isAuth,
  isStudent,
  enrollmentController.renderDropClassListPage,
);

router.get(
  '/request-class',
  isAuth,
  isStudent,
  enrollmentController.renderRequestClassPage,
);

router.get(
  '/courseofferings',
  isAuth,
  isStudent,
  enrollmentController.renderCourseOfferingsPage,
);

router.get(
  '/courseofferings/search',
  isAuth,
  isStudent,
  enrollmentController.enrollment_course_offerings_search_get,
);

module.exports = router;

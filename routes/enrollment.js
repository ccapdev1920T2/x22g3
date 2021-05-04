var express = require("express");
var router = express.Router();

var enrollmentController = require("../controllers/enrollmentController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

// /enrollment landing page
router.get(
  "/",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderEnrollmentPage
);

router.get(
  "/class-schedule",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderClassSchedulePage
);

router.get(
  "/add-class",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderAddClassPage
);

router.get(
  "/drop-class",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderDropClassPage
);

router.get(
  "/drop-class/checkout",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderDropClassListPage
);

router.get(
  "/request-class",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderRequestClassPage
);

router.get(
  "/courseofferings",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.renderCourseOfferingsPage
);

router.get(
  "/courseofferings/search",
  isAuth,
  isStudent,
  isAllowedAccess,
  enrollmentController.enrollment_course_offerings_search_get
);

module.exports = router;

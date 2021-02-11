var express = require("express");
var router = express.Router();

var enrollment_controller = require("../controllers/enrollmentController");

// /enrollment landing page
router.get("/", enrollment_controller.enrollment_landing_page_get);

// TEST CREATE COURSES
//router.get('/create', enrollment_controller.course_create_sample);

router.get(
    "/class-schedule",
    enrollment_controller.enrollment_class_schedule_get
);

router.get("/add-class", enrollment_controller.enrollment_add_class_get);

router.get("/drop-class", enrollment_controller.enrollment_drop_class_get);

router.get(
    "/drop-class/checkout",
    enrollment_controller.enrollment_dropclass_list_get
);

router.get("/requestclass", enrollment_controller.enrollment_request_class_get);

router.get(
    "/courseofferings",
    enrollment_controller.enrollment_course_offerings_list_get
);

router.get(
    "/courseofferings/search",
    enrollment_controller.enrollment_course_offerings_search_get
);

module.exports = router;

var express = require("express");
var router = express.Router();

var enrollment_controller = require("../controllers/enrollmentController");

// /enrollment landing page
router.get("/", enrollment_controller.enrollment_landing_page_get);

// TEST CREATE COURSES
//router.get('/create', enrollment_controller.course_create_sample);

router.get(
    "/classschedule",
    enrollment_controller.enrollment_class_schedule_get
);

router.get("/addclass", enrollment_controller.enrollment_add_class_get);

router.get("/dropclass", enrollment_controller.enrollment_drop_class_get);

router.get(
    "/dropclass_list",
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

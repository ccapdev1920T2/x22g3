const express = require("express");
const {
  postStudent,
  getAllStudents,
  disableAccess,
  enableAccess,
  preenlist,
  getAllPreenlistedCourses,
  removePreenlistedCourse,
  enroll,
  getAllEnrolledCourses,
  postDrop,
} = require("../../controllers/api/studentApiController");
const {
  validate,
  addStudentValidator,
  searchStudentsValidator,
  preenlistValidator,
  removePreenlistedCourseValidator,
  enrollValidator,
  getAllEnrolledCoursesValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.get("/", validate(searchStudentsValidator), getAllStudents);

router.post("/", validate(addStudentValidator), postStudent);

router.post("/:studentId/disable-access", disableAccess);

router.post("/:studentId/enable-access", enableAccess);

router.post("/:studentId/preenlist", validate(preenlistValidator), preenlist);

router.get("/:studentId/preenlisted-courses", getAllPreenlistedCourses);

router.post(
  "/:studentId/preenlisted-courses",
  validate(removePreenlistedCourseValidator),
  removePreenlistedCourse
);

router.post("/:studentId/enroll", validate(enrollValidator), enroll);

router.post("/:studentId/courses/drop", postDrop);

router.get(
  "/:studentId/courses",
  validate(getAllEnrolledCoursesValidator),
  getAllEnrolledCourses
);
module.exports = router;

const express = require("express");
const {
  postStudent,
  getAllStudents,
  disableAccess,
  enableAccess,
  preenlist,
  getAllPreenlistedCourses,
  removePreenlistedCourse,
} = require("../../controllers/api/studentApiController");
const {
  validate,
  addStudentValidator,
  searchStudentsValidator,
  preenlistValidator,
  removePreenlistedCourseValidator,
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

module.exports = router;

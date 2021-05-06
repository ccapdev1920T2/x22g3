const express = require("express");
const {
  postStudent,
  getAllStudents,
  disableAccess,
  enableAccess,
  preenlist,
} = require("../../controllers/api/studentApiController");
const {
  validate,
  addStudentValidator,
  searchStudentsValidator,
  preenlistValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.get("/", validate(searchStudentsValidator), getAllStudents);

router.post("/", validate(addStudentValidator), postStudent);

router.post("/:studentId/disable-access", disableAccess);

router.post("/:studentId/enable-access", enableAccess);

router.post("/:studentId/preenlist", validate(preenlistValidator), preenlist);

module.exports = router;

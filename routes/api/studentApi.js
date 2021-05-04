const express = require("express");
const {
  postStudent,
  getAllStudents,
  disableAccess,
  enableAccess,
} = require("../../controllers/api/studentApiController");
const {
  validate,
  addStudentValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.get("/", getAllStudents);

router.post("/", validate(addStudentValidator), postStudent);

router.post("/:studentId/disable-access", disableAccess);

router.post("/:studentId/enable-access", enableAccess);

module.exports = router;

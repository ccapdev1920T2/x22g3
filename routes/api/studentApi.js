const express = require("express");
const {
  postStudent,
  getAllStudents,
} = require("../../controllers/api/studentApiController");
const {
  validate,
  addStudentValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.get("/", getAllStudents);

router.post("/", validate(addStudentValidator), postStudent);

module.exports = router;

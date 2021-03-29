const express = require("express");
const { postStudent } = require("../../controllers/api/studentApiController");
const {
  validate,
  addStudentValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.post("/", validate(addStudentValidator), postStudent);
module.exports = router;

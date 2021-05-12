const express = require("express");
const { getAllCourses } = require("../../controllers/api/courseApiController");
const {
  validate,
  getAllCoursesValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.get("/", validate(getAllCoursesValidator), getAllCourses);

module.exports = router;

const express = require("express");
const {
  getAllPreenlistmentCourses,
} = require("../../controllers/api/preenlistmentApiController");
const {
  validate,
  searchCourseCodeValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.get(
  "/",
  validate(searchCourseCodeValidator),
  getAllPreenlistmentCourses
);

module.exports = router;

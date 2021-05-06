const express = require("express");
const {
  getAllPreenlistmentCourses,
} = require("../../controllers/api/preenlistmentApiController");
const router = express.Router();

router.get("/", getAllPreenlistmentCourses);

module.exports = router;

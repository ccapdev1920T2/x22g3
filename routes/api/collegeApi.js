const express = require("express");
const {
  getAllColleges,
  getOneCollegeById,
} = require("../../controllers/api/collegeApiController");
const router = express.Router();

router.get("/", getAllColleges);

router.get("/:collegeId", getOneCollegeById);

module.exports = router;

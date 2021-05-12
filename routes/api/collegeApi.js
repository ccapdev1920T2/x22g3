const express = require("express");
const {
  getAllColleges,
  getCollegeById,
} = require("../../controllers/api/collegeApiController");
const router = express.Router();

router.get("/", getAllColleges);

router.get("/:collegeId", getCollegeById);

module.exports = router;

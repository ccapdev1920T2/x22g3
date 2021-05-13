const express = require("express");
const {
  getAllTermDetails,
  getTermDetailById,
} = require("../../controllers/api/termDetailsApiController");

const router = express.Router();

router.get("/", getAllTermDetails);

router.get("/:termDetailId", getTermDetailById);

module.exports = router;

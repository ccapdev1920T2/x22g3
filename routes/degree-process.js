const express = require("express");
const router = express.Router();

const {
  renderDegreeProcess,
} = require("../controllers/degreeProcessController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

router.get("/", isAuth, isStudent, isAllowedAccess, renderDegreeProcess);

module.exports = router;

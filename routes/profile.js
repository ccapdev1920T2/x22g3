const express = require("express");
const router = express.Router();

const { renderProfilePage } = require("../controllers/profileController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

router.get("/", isAuth, isStudent, isAllowedAccess, renderProfilePage);

module.exports = router;

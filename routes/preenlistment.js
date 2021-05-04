const express = require("express");
const router = express.Router();

const {
  renderPreenlistmentPage,
} = require("../controllers/preenlistmentController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

router.get("/", isAuth, isStudent, isAllowedAccess, renderPreenlistmentPage);

module.exports = router;

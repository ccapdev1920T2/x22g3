const express = require("express");
const router = express.Router();

const { renderStudentHomepage } = require("../controllers/indexController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

router.get("/", isAuth, isStudent, isAllowedAccess, renderStudentHomepage);

module.exports = router;

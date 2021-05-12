const express = require("express");
const router = express.Router();

const {
  renderPreenlistmentPage,
  renderPreenlistedCoursesPage,
} = require("../controllers/preenlistmentController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

router.get("/", isAuth, isStudent, isAllowedAccess, renderPreenlistmentPage);

router.get(
  "/preenlisted-courses",
  isAuth,
  isStudent,
  isAllowedAccess,
  renderPreenlistedCoursesPage
);
module.exports = router;

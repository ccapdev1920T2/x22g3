const express = require("express");
const router = express.Router();

const {
  renderCartPage,
  renderEnrollmentCartPage,
  renderPreenlistmentCartPage,
} = require("../controllers/cartController");
const {
  isAuth,
  isStudent,
  isAllowedAccess,
} = require("../helpers/auth-helper");

// TODO: /cart will redirect to either /cart/preenlistment or /cart/enrollment, whichever is active
router.get("/", isAuth, isStudent, isAllowedAccess, renderCartPage);

router.get(
  "/preenlistment",
  isAuth,
  isStudent,
  isAllowedAccess,
  renderPreenlistmentCartPage
);

// TODO: router.post('/preenlistment') from /preenlistment route

router.get(
  "/enrollment",
  isAuth,
  isStudent,
  isAllowedAccess,
  renderEnrollmentCartPage
);

module.exports = router;

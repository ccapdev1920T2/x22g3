const express = require("express");
const {
  validate,
  addStudentValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.post("/new", validate(addStudentValidator), (req, res) => {
  res.send(req.originalUrl);
});
module.exports = router;

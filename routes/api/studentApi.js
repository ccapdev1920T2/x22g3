const express = require("express");
const {
  validate,
  addStudentValidator,
} = require("../../helpers/validation-helper");
const router = express.Router();

router.post("/", validate(addStudentValidator), (req, res) => {
  const { first, middle, last, ...student } = req.body;
  student.name = { first, middle, last };

  console.log(student);
  res.send(req.originalUrl);
});
module.exports = router;

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");

router.get("/student/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const student = await Student.findById(decoded.studentId);

    if (student.account) {
      return res.redirect("/login");
    }

    return res.render("create-password", { layout: false });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

module.exports = router;

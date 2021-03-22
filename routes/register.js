const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { salt } = require("../config/bcrypt-config");
const {
  validate,
  createPasswordValidator,
} = require("../helpers/validation-helper");
const Account = require("../models/Account");
const Student = require("../models/Student");

router.get("/student/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const student = await Student.findById(decoded.studentId);

    if (student.account) {
      return res.redirect("/login");
    }

    return res.render("create-password", {
      layout: false,
      title: "Create your password | Animo.sys",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

router.post(
  "/student/:token",
  validate(createPasswordValidator),
  async (req, res) => {
    try {
      const { token } = req.params;
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      const student = await Student.findById(decoded.studentId);

      const hash = await bcrypt.hash(req.body.password, salt);

      const account = {
        username: student.idNum,
        password: hash,
        type: Account.getStudentType(),
      };

      const createdAccount = await Account.create(account);

      student.account = createdAccount._id;
      await student.save();

      res.status(200).send({ message: "OK" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
  }
);

module.exports = router;

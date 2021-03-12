const { check, validationResult } = require("express-validator");

exports.validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    console.log(errors);
    res.status(400).json({ errors: errors.array() });
  };
};

exports.addStudentValidator = [
  check("first").trim().notEmpty().withMessage("First name required"),
  check("middle").trim().notEmpty().withMessage("Middle name required"),
  check("last").trim().notEmpty().withMessage("Last name required"),
  check("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address syntax")
    .bail()
    .matches(/^[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)+@dlsu\.edu\.ph$/)
    .withMessage("Please input a valid DLSU email address"),
  check("program").trim().notEmpty().withMessage("Program required"),
  check("idNum")
    .trim()
    .isNumeric()
    .withMessage("ID Number required")
    .isLength({ min: 8, max: 8 })
    .withMessage("Invalid DLSU ID Number"),
  check("section").trim().notEmpty().withMessage("Section required"),
];

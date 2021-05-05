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
  check("first", "First name required")
    .trim()
    .notEmpty()
    //    .isAlpha()
    .withMessage("Invalid first name"),
  check("middle", "Middle name required")
    .trim()
    .notEmpty()
    //    .isAlpha()
    .withMessage("Invalid middle name"),
  check("last", "Last name required")
    .trim()
    .notEmpty()
    .isAlphanumeric()
    .withMessage("Invalid last name"),
  check("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address syntax")
    .bail()
    .matches(/^[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)+@dlsu\.edu\.ph$/)
    .withMessage("Please input a valid DLSU email address"),
  check("college").trim().notEmpty().withMessage("College required"),
  check("program").trim().notEmpty().withMessage("Program required"),
  check("idNum")
    .trim()
    .isNumeric()
    .withMessage("ID Number required")
    .isLength({ min: 8, max: 8 })
    .withMessage("Invalid DLSU ID Number"),
  check("section").trim().notEmpty().withMessage("Section required"),
];

exports.requestClassValidator = [
  check("fullname").notEmpty().withMessage("Full Name required"),

  check("idnumber", "Invalid DLSU ID Number")
    .trim()
    .notEmpty()
    .withMessage("ID Number required")
    .isInt()
    .isLength({ min: 8, max: 8 }),
  check("degree").trim().notEmpty().withMessage("Degree required"),

  check("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject to be requested required"),
];

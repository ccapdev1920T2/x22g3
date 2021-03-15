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
  check("first", "First name required").trim().notEmpty(),
  check("middle", "Middle name required").trim().notEmpty(),
  check("last", "Last name required").trim().notEmpty(),
  check("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email address syntax")
    .bail()
    .matches(/^[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)+@dlsu\.edu\.ph$/)
    .withMessage("Please input a valid DLSU email address"),
  check("college", "College required").trim().notEmpty(),
  check("program", "Program required").trim().notEmpty(),
  check("idNum", "Invalid DLSU ID Number")
    .trim()
    .notEmpty()
    .withMessage("ID Number required")
    .isInt()
    .isLength({ min: 8, max: 8 }),
  check("section", "Section required").trim().notEmpty(),
];

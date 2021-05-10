const { check, validationResult, query } = require("express-validator");
const PreenlistmentCourse = require("../models/PreenlistmentCourse");
const Student = require("../models/Student");

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

    .isAlpha()
    .withMessage("Invalid first name"),
  check("middle", "Middle name required")
    .trim()
    .notEmpty()

    .isAlpha()
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
    .withMessage("Please input a valid DLSU email address")
    .custom(async (value) => {
      try {
        const student = await Student.findOne({ email: value });

        if (student) return Promise.reject("Email already exists");
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }),
  check("college", "College required").trim().notEmpty(),
  check("degree", "Degree required").trim().notEmpty(),
  check("idNum", "Invalid DLSU ID Number")
    .trim()
    .notEmpty()
    .withMessage("ID Number required")
    .isInt()
    .isLength({ min: 8, max: 8 })
    .custom(async (value) => {
      try {
        const student = await Student.findOne({ idNum: value });

        if (student) return Promise.reject("ID Number already exists");
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }),
  check("year", "Year required")
    .trim()
    .notEmpty()
    .isInt({ min: 1 })
    .withMessage("Year must be at least 1"),
  check("section", "Invalid section")
    .trim()
    .notEmpty()
    .withMessage("Section required")
    .isLength({ min: 3 })
    .isAlphanumeric()
    .isUppercase()
    .matches(/[0-9]$/),
];

exports.createPasswordValidator = [
  check("password")
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  check("confirm-password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Must match the password");
    }

    return true;
  }),
];

exports.searchStudentsValidator = [
  query("idNum")
    .optional()
    .trim()
    .customSanitizer((val, { req }) => {
      if (val === "") {
        return new RegExp("[0-9]");
      }

      return new RegExp(val);
    }),
];

exports.searchCourseCodeValidator = [
  query("courseCode")
    .optional()
    .trim()
    .toUpperCase()
    .customSanitizer((val, { req }) => {
      if (val === "") {
        return new RegExp("[A-Z0-9]");
      }

      return new RegExp(val);
    }),
];

exports.preenlistValidator = [
  check("studentId", "Invalid student ID.")
    .trim()
    .notEmpty()
    .isMongoId()
    .custom((val, { req }) => {
      return val == req.user._id;
    }),
  check("_id")
    .trim()
    .notEmpty()
    .withMessage("No course specified.")
    .bail()
    .isMongoId()
    .withMessage("Invalid course ID.")
    .bail()
    .custom(async (val, { req }) => {
      try {
        const course = await PreenlistmentCourse.findById(val);
        if (!course) {
          return Promise.reject("Course does not exist.");
        }

        const student = await Student.findById(req.params.studentId);

        if (!student) return Promise.reject("Student does not exist.");

        if (student.preenlistedCourses.includes(val)) {
          return Promise.reject(
            "Already preenlisted for the selected subject."
          );
        }
      } catch (error) {
        console.log(error);
        return Promise.reject();
      }
    }),
];

exports.removePreenlistedCourseValidator = [
  check("studentId", "Invalid student ID.")
    .trim()
    .notEmpty()
    .isMongoId()
    .custom((val, { req }) => {
      return val == req.user._id;
    }),
  check("_id")
    .trim()
    .notEmpty()
    .withMessage("No course specified.")
    .isMongoId()
    .withMessage("Invalid course ID.")
    .custom(async (val, { req }) => {
      try {
        const student = await Student.findById(
          req.params.studentId,
          "preenlistedCourses"
        );

        if (!student) return Promise.reject("Student does not exist.");

        if (!student.preenlistedCourses)
          return Promise.reject("No preenlisted courses available.");

        if (!student.preenlistedCourses.includes(val))
          return Promise.reject("Not preenlisted for that subject.");
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    }),
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

exports.getAllCoursesValidator = [
  query("academicYear")
    .optional()
    .trim()
    .customSanitizer((val, { req }) => {
      if (val === "") {
        return new RegExp("[0-9]*-[0-9]*");
      }

      return new RegExp(val);
    }),
  query("term")
    .optional()
    .trim()
    .customSanitizer((val, { req }) => {
      if (val === "") {
        return { $gt: 0 };
      }

      return Number(val);
    }),
  query("courseCode")
    .optional()
    .trim()
    .toUpperCase()
    .customSanitizer((val, { req }) => {
      if (!val) {
        return new RegExp("[A-Z0-9]");
      }

      return new RegExp(val);
    }),
];

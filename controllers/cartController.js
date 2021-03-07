var PreenlistedCourses = require("../models/preenlisted_courses");
var PreenlistCourse = require("../models/preenlist_course");
var EnrolledCourses = require("../models/preenlisted_courses");

exports.renderCartPage = (req, res) => {
  res.render("cart", {
    title: "Cart | Animo.sys",
  });
};

// Respond to /cart/preenlistment
exports.renderPreenlistmentCartPage = (req, res) => {
  console.log("TODO: get data from PreenlistedCourses");

  res.render("cart_preenlistment", {
    title: "Preenlistment Cart | Animo.sys",
  });
};

exports.renderEnrollmentCartPage = (req, res) => {
  console.log("TODO: get data from EnrolledCourses");
  res.render("cart_enrollment", {
    title: "Enrollment Cart | Animo.sys",
  });
};

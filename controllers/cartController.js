require("../models/PreenlistmentCourse");

exports.renderCartPage = (req, res) => {
  res.render("cart", {
    title: "Cart | Animo.sys",
  });
};

exports.renderEnrollmentCartPage = (req, res) => {
  console.log("TODO: get data from EnrolledCourses");
  res.render("cart_enrollment", {
    title: "Enrollment Cart | Animo.sys",
  });
};

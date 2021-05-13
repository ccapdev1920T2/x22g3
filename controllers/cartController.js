require("../models/PreenlistmentCourse");

exports.renderCartPage = (req, res) => {
  res.render("cart", {
    title: "Cart | Animo.sys",
  });
};

exports.renderEnrollmentCartPage = (req, res) => {
  res.render("cart_enrollment", {
    title: "Enrollment Cart | Animo.sys",
  });
};

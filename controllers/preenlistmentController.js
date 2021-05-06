// Respond to /preenlistment
exports.renderPreenlistmentPage = (req, res) => {
  res.render("preenlistment", {
    title: "Pre-enlistment | Animo.sys",
    _id: req.user._id,
  });
};

// Respond to /preenlistment/preenlisted-courses
exports.renderPreenlistedCoursesPage = (req, res) => {
  res.render("preenlisted-courses", {
    title: "Preenlisted Courses | Animo.sys",
  });
};

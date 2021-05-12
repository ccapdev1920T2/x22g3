exports.renderStudentHomepage = async (req, res) => {
  res.render("index", {
    title: "Home | Animo.sys",
    fname: req.user.name.first,
  });
};

// Display details for one student in the /profile route
exports.renderProfilePage = async (req, res) => {
  console.log("TODO: get data from Student");
  res.render("profile", {
    title: "Profile | Animo.sys",
    fname: req.user.name.first,
    lname: req.user.name.last,
    mname: req.user.name.middle,
    idNum: req.user.idNum,
  });
};

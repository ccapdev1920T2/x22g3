var Student = require("../models/Student");

// Display details for one student in the /profile route
exports.renderProfilePage = (req, res) => {
  console.log("TODO: get data from Student");
  res.render("profile", {
    title: "Profile | Animo.sys",
  });
};

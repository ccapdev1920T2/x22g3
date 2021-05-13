const Scholarship = require("../models/Scholarship");

// Display details for one student in the /profile route
exports.renderProfilePage = async (req, res) => {
  try {
    let scholarship = { name: "Not a scholar", description: "N/A" };

    if (req.user.scholarship) {
      scholarship = await Scholarship.findById(req.user.scholarship);
    }

    res.render("profile", {
      title: "Profile | Animo.sys",
      fname: req.user.name.first,
      lname: req.user.name.last,
      mname: req.user.name.middle,
      idNum: req.user.idNum,
      scholarshipName: scholarship.name,
      scholarshipDesc: scholarship.description,
      studentId: req.user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// REQUIRE MODELS AS NEEDED
var Moderator = require("../models/Moderator");
var Student = require("../models/Student");

// Respond to /mod GET request
exports.renderModeratorHomepage = (req, res) => {
  res.render("index-mod", {
    mod: true,
    title: "Home | Animo.sys",
  });
};

// Respond to /mod POST request, i.e. adding a new student
exports.moderator_create_student_post = (req, res) => {
  console.log("TODO: implement POST logic");
  res.render("index-mod", {
    mod: true,
    // layout: "main-mod",
    // addedStyles: ["index-mod-styles", "forms"],
    data: JSON.stringify(req.body),
    title: "Home | Animo.sys",
  });
};

// Respond to /mod/settings GET request
exports.moderator_settings_detail = (req, res) => {
  res.render("settings-mod", {
    mod: true,
    // layout: "main-mod",
    // addedStyles: ["settings-mod-styles"],
    title: "Settings | Animo.sys",
  });
};

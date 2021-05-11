const Student = require("../models/Student");

// Landing page for /enrollment route
exports.renderEnrollmentPage = (req, res) => {
  res.render("enrollment", {
    route: "enrollment",
    title: "Enrollment | Animo.sys",
  });
};

exports.renderClassSchedulePage = (req, res) => {
  console.log("TODO: get data from Student");
  res.render("class-schedule", {
    title: "Class Schedule | Animo.sys",
  });
};

exports.renderAddClassPage = (req, res) => {
  res.render("add-class", {
    title: "Add a Class | Animo.sys",
    studentId: req.user._id,
  });
};

// Drop a Class
exports.renderDropClassPage = (req, res) => {
  res.render("drop-class", {
    title: "Drop a Class | Animo.sys",
  });
};

// Display list of dropped classes
exports.renderDropClassListPage = (req, res) => {
  res.render("dropclass_list", {
    title: "List of Dropped Classes | Animo.sys",
  });
};

// Get Request a Class landing page
exports.renderRequestClassPage = (req, res) => {
  res.render("request-class", {
    title: "Request a Class | Animo.sys",
  });
};

// Post form data from /enrollment/requestclass
exports.enrollment_request_class_post = (req, res) => {
  console.log("TODO: create a new Request then update the Request collection");
  res.render("request-class", {
    title: "Request a Class | Animo.sys",
  });
};

// display course offerings page
exports.renderCourseOfferingsPage = (req, res) => {
  res.render("courseofferings", {
    title: "Course Offerings | Animo.sys",
  });
};

// TODO: move this to folder controllers/api
exports.enrollment_course_offerings_search_get = (req, res) => {
  console.log("TODO: get data from Course");

  var q = req.query.q;
  var regex = new RegExp(q);

  console.log(regex);

  var data = [];

  Course.find({ courseCode: regex }, "-_id -__v")
    .exec()
    .then((courses) => {
      data = courses;
      res.send(data);
    })
    .catch((err) => console.log(err));
};

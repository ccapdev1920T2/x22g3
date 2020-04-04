// REQUIRE MODELS AS NEEDED
const mongoose = require("mongoose");
var Course = require("../models/course");

// const course = new Course({
//     _id: new mongoose.Types.ObjectId(),
//     courseCode: 'CSARCH1',
//     section: 'X22',
//     days: 'MW',
//     startTime: '0915',
//     endTime: '1045',
//     faculty: 'sIR mARNEL',
//     room: 'GT203',
//     enlCap: 15,
//     enrolled: 10
// });

// display course offerings page
exports.course_offerings_list = (req, res) => {
  res.render("courseofferings", {
    addedStyles: ["forms"],
    title: "Course Offerings | Animo.sys",
  });
};

exports.course_offerings_search = (req, res) => {
  console.log("TODO: get data from Course");

  var q = req.query.q;
  var regex = new RegExp(q);

  console.log(regex);

  var data = [];
  Course.find({ courseCode: regex }, '-_id -isElective -faculty')
    .exec()
    .then((courses) => {
      data = courses;
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

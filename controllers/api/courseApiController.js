const TermDetail = require("../../models/TermDetail");
const Course = require("../../models/Course");

exports.getAllCourses = async (req, res) => {
  try {
    let { courseCode = /[A-Z0-9]/, ...rest } = req.query;
    let options = rest;

    let terms = (await TermDetail.find(options, "_id")).map((term) =>
      String(term._id)
    );

    const courses = (await Course.find({ courseCode })).filter((course) => {
      return terms.includes(String(course.termOffered));
    });

    res.status(200).send(courses);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

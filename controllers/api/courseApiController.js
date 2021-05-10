const TermDetail = require("../../models/TermDetail");
const Course = require("../../models/Course");

exports.getAllCourses = async (req, res) => {
  try {
    let options = req.query || {};

    let terms = (await TermDetail.find(options, "_id")).map((term) =>
      String(term._id)
    );

    const courses = (await Course.find()).filter((course) => {
      return terms.includes(String(course.termOffered));
    });

    res.status(200).send(courses);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

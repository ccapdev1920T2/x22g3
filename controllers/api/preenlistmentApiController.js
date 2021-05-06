const PreenlistmentCourse = require("../../models/PreenlistmentCourse");

exports.getAllPreenlistmentCourses = async (req, res) => {
  try {
    const preenlistments = await PreenlistmentCourse.find();
    res.send(preenlistments);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

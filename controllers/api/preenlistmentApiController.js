const PreenlistmentCourse = require("../../models/PreenlistmentCourse");

exports.getAllPreenlistmentCourses = async (req, res) => {
  try {
    let options = req.query || {};

    const preenlistments = await PreenlistmentCourse.find(options);
    res.send(preenlistments);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

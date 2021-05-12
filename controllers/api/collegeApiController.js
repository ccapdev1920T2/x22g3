const College = require("../../models/College");

exports.getAllColleges = async (req, res) => {
  const { projection = "", code = "" } = req.query;

  const query = {};

  if (code) query.code = code;

  try {
    const colleges = await College.find(query, projection);

    return res.status(200).json(colleges);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ msg: "Internal server error" });
  }
};

exports.getCollegeById = async (req, res) => {
  const { collegeId } = req.params;
  const { projection = "" } = req.query;

  try {
    const college = await College.findById(collegeId, projection);

    if (!college) return res.status(404).json({ msg: "Not found" });

    return res.status(200).json(college);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

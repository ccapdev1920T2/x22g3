const Request = require("../../models/SubjectRequest");

exports.postRequest = async (req, res) => {
  try {
    const { subject } = req.body;
    const saved = await Request.create({ subject, requestedBy: req.user._id });

    res.send(saved);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

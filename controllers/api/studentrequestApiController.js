const Request = require("../../models/SubjectRequest");

exports.postRequest = async (req, res) => {
  console.log(req.body);
  // TODO add to database
  try {
    const { request } = req.body;
    const saved = await Request.create(request);
    res.send(saved);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

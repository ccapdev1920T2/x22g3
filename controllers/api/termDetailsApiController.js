const TermDetail = require("../../models/TermDetail");

exports.getAllTermDetails = async (req, res) => {
  try {
    const termDetails = await TermDetail.find();

    return res.status(200).send(termDetails);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.getTermDetailById = async (req, res) => {
  try {
    const termDetail = await TermDetail.findById(req.params.termDetailId);

    if (!termDetail) {
      return res.status(404).send({ message: "Term detail not found." });
    }

    return res.status(200).send(termDetail);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

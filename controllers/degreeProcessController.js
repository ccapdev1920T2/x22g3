// const mongoose = require("mongoose");
const Documents = require("../models/Document");

exports.renderDegreeProcess = async function (req, res) {
  let requestedDocuments = await Documents.find({
    requestedBy: req.user._id,
  }).lean();

  if (requestedDocuments.length > 0) {
    res.render("degree-process", {
      title: "Degree Process | Animo.sys",
      _id: req.user._id,
      requestedDocuments: requestedDocuments,
    });
  } else {
    res.render("degree-process", {
      title: "Degree Process | Animo.sys",
      _id: req.user._id,
    });
  }
};

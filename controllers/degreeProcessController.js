const mongoose = require("mongoose");
const Documents = require("../models/Document");
exports.renderDegreeProcess = async function (req, res) {

  let requestedDocuments = await Documents.find({requestedBy: req.user.idNum}).lean();
  console.log(requestedDocuments);
  if(requestedDocuments.length > 0){
    console.log("Detected");
    res.render('degree-process', {
      title: 'Degree Process | Animo.sys',
      _id: req.user._id,
      requestedDocuments: requestedDocuments
    });
  }
  else{
    res.render('degree-process', {
      title: 'Degree Process | Animo.sys',
      _id: req.user._id
    });
  }
};

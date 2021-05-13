const Document = require("../../models/Document");

exports.sendDocumentRequest = async (req, res) => {
  // console.log(req.user);
  try {
    let document = new Document({
      requestDate: Date.now(),
      document: req.body.documentType,
      isApproved: false,
      requestedBy: req.user._id,
    });
    await document.save();

    var details = {
      msg: "Document requested",
    };

    res.redirect("/degree-process");
  } catch (err) {
    console.log(err);
  }
};

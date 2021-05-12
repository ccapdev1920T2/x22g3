const Document = require("../../models/Document");

exports.sendDocumentRequest = async (req, res) => {
  console.log(req.user);
  try {
    let document = new Document({
      requestDate: new Date(),
      document: req.body["documentType"],
      isApproved: false,
      requestedBy: req.user.idNum,
    });
    await document.save();
    console.log("BIG BUANCHO");

    var details = {
      msg: "Document requested",
    };
    // res.render('degree-process', {
    //     details
    // });
    res.redirect("/degree-process");

    //res.send( await document.save());
    //alert("Succesful request!");
  } catch (err) {
    console.log(err);
  }
};

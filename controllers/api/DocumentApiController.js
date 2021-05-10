const Document = require("../../models/Document");


exports.sendDocumentRequest =async (req, res) => {
    console.log(req.user);
    try{
    let document = new Document({
        requestedBy: req.user._id,
        documenttype: req.body["documentType"]
    });
    
    res.send( await document.save());
    }
    catch(err){
        console.log(err);
    }
};
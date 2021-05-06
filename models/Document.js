const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
    requestedBy: { type: String, required: true},
    documenttype: { type: String, required: true}
});

module.exports = mongoose.model("Document", documentSchema);

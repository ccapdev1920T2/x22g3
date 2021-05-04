const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: { type: String, required: true },
    idNum: { type: String, required: true },
    degree: { type: String, required: true },
    subject: { type: String, required: true },
    fileupload: {data: Buffer, contentType: String}
});

module.exports = mongoose.model("Request", requestSchema);


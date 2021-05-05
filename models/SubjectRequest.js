const mongoose = require("mongoose");

const subjectRequestSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullname: { type: String, required: true },
  idNum: { type: String, required: true },
  degree: { type: String, required: true },
  subject: { type: String, required: true },
});

module.exports = mongoose.model("SubjectRequest", subjectRequestSchema);

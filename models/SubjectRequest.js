const mongoose = require("mongoose");

const subjectRequestSchema = mongoose.Schema({
  subject: { type: String, required: true },
  requestedBy: { type: mongoose.Types.ObjectId, ref: "Student" },
});

module.exports = mongoose.model("SubjectRequest", subjectRequestSchema);

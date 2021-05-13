const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
  requestDate: { type: Date, required: true },
  document: {
    type: String,
    enum: ["Transcript of Records", "Certificate of Good Morals"],
    required: true,
  },
  isApproved: { type: Boolean, default: false },
  requestedBy: { type: mongoose.Types.ObjectId, required: true },
});

module.exports = mongoose.model("Document", documentSchema);

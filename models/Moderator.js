const mongoose = require("mongoose");

const moderatorSchema = mongoose.Schema({
  account: { type: mongoose.Types.ObjectId, ref: "Account", required: true },
  name: {
    first: { type: String, required: true },
    middle: { type: String, required: true },
    last: { type: String, required: true },
  },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Moderator", moderatorSchema);

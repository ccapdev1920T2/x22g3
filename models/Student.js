const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  account: { type: mongoose.Types.ObjectId, ref: "Account" },
  name: {
    first: { type: String, required: true },
    middle: { type: String, required: true },
    last: { type: String, required: true },
  },
  idNum: { type: String, required: true },
  email: { type: String, required: true },
  section: { type: String, required: true },
  isGraduating: { type: Boolean, default: false },
  year: { type: Number, required: true },
  college: { type: String, required: true },
  degree: { type: String, required: true },
  hasAccess: { type: Boolean, default: true },
  preenlistedCourses: [{ type: mongoose.Types.ObjectId, ref: "PreEnlist" }],
});

module.exports = mongoose.model("Student", studentSchema);

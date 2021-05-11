const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseCode: String,
  section: String,
  schedules: [
    {
      day: { type: String, enum: ["M", "T", "W", "H", "F", "S"] },
      startTime: { type: String },
      endTime: { type: String },
    },
  ],
  instructor: String,
  room: String,
  enlCap: Number,
  enrollees: [{ type: mongoose.Types.ObjectId, ref: "Student" }],
  termOffered: { type: mongoose.Types.ObjectId, ref: "TermDetail" },
});

module.exports = mongoose.model("Course", courseSchema);

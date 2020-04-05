const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseCode: String,
    isElective: {
        type: Boolean,
        default: false,
    },
    section: String,
    days: {
        type: [String],
        enum: ["M", "T", "W", "H", "F", "S"],
    },
    time: {
        start: String,
        end: String,
    },
    faculty: String,
    room: String,
    status: {
        type: String,
        enum: ["Open", "Closed"],
        default: function () {
            return this.enrolled < this.enlCap ? "Open" : "Closed";
        },
    },
    enlCap: Number,
    enrolled: Number,
});

module.exports = mongoose.model("Course", courseSchema);

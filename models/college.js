const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
    college: { type: String, required: true }
});

module.exports = mongoose.model('Colleges', CollegeSchema);
const mongoose = require('mongoose');

const ScholarshipSchema = mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Scholarships', ScholarshipSchema);
const mongoose = require('mongoose');

const ScholarshipSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
});

module.exports = mongoose.model('Scholarships', ScholarshipSchema);

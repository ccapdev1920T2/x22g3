const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  degrees: [
    {
      name: { type: String, required: true },
      code: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Colleges', CollegeSchema);

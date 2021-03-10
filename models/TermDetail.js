const mongoose = require('mongoose');

const termDetailSchema = mongoose.Schema({
  academicYear: { type: String, required: true },
  term: { type: Number, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
});

module.exports = mongoose.model('TermDetail', termDetailSchema);

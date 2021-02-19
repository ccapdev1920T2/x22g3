const mongoose = require('mongoose');

const termSchema = mongoose.Schema({
  _id: { type: String, required: true },
  academicYear: {type: String, require: true},
  term: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: {type: Date, required: true}
});

module.exports = mongoose.model('Term-Details', termSchema);

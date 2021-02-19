const mongoose = require('mongoose');

const STUDENT_TYPE = 'student';
const MODERATOR_TYPE = 'moderator';

const accountSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, enum: [STUDENT_TYPE, MODERATOR_TYPE], required: true },
});

accountSchema.static('getStudentType', function () {
  return STUDENT_TYPE;
});

accountSchema.static('getModeratorType', function () {
  return MODERATOR_TYPE;
});

module.exports = mongoose.model('Account', accountSchema);

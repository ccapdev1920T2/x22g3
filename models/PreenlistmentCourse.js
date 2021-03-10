const mongoose = require('mongoose');

const PreEnlistmentSchema = mongoose.Schema({
    courseCode: { type: String, required: true }
});

module.exports = mongoose.model('PreEnlist', PreEnlistmentSchema);
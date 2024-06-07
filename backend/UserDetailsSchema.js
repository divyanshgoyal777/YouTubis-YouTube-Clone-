const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    loginDate: { type: String, required: true },
});

module.exports = mongoose.model('User', userDetailsSchema);
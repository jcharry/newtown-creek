const mongoose = require('mongoose');

module.exports = mongoose.Schema({
    email: String,
    date: { type: Date, default: Date.now }
});


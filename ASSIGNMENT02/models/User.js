const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    profile: String,
    isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);

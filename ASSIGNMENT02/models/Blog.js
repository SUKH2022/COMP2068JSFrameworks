const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    thumbnail: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateTime: { type: Date, default: Date.now },
    isFeatured: { type: Boolean, default: false }
});

module.exports = mongoose.model('Blog', BlogSchema);

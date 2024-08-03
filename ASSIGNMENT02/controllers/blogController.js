const Blog = require('../models/Blog');

exports.homePage = async (req, res) => {
    try {
        const featuredPost = await Blog.findOne({ isFeatured: true });
        const posts = await Blog.find().sort({ dateTime: -1 }).limit(9);
        res.render('index', { featuredPost, posts });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

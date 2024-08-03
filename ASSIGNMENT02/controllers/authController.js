const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signIn = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
};

exports.signUp = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.redirect('/signin');
    } catch (err) {
        res.redirect('/signup');
    }
};

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};

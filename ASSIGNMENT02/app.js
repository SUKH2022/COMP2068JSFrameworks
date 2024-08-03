const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

const app = express();

// Database connection
mongoose.connect(process.env.CONNECTION_STRING_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });

// Set up session management
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING_MONGODB })
}));

// Initialize passport
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Set up view engine
const exphbs = require('express-handlebars');
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use('/', authRoutes);
app.use('/blog', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

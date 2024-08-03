const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING_MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

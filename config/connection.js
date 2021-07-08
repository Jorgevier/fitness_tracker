const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",{
        useNewUrlParser: true,
        useUnifiesTopology: true,
        useCreateIndex:true,
        useFindAndModify: false,
    }
);

module.exports = mongoose.connection;
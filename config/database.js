const mongoose = require('mongoose');

exports.connect = () => {
    console.log("mongouri: ",process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(error => {
        console.log("Database connection failed.");
        console.error(error);
        process.exit(1);
    });
};
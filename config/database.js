//connect to database
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ADMIN:1234@sei.61zdp.mongodb.net/bakery-website?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to mongodb on ${db.host}`);
});

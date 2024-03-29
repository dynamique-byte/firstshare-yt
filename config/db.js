require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection  //EqTfRT674QBXafz3
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected');
    }).catch(err => {
        console.log('Connection failed');
    });
}

//APP_BASE_URL=http://localhost:3000
module.exports = connectDB;
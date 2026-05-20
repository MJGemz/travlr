const mongoose = require('mongoose');

// connects to the travlr database
const dbURI = 'mongodb://localhost:27017/travlr';

// opens the connection to MongoDB
const connect = () => {
    setTimeout(() => mongoose.connect(dbURI), 1000);
};

// logs when the connection is open
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

// logs any connection errors
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err);
});

// logs when the connection closes
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

module.exports = { connect };
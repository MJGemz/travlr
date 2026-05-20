const mongoose = require('mongoose');
const Trip = require('./app_server/models/travlr');
const trips = require('./data/trips.json');

// connects to the database
const dbURI = 'mongodb://localhost:27017/travlr';

mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
        // clears old data first
        return Trip.deleteMany({});
    })
    .then(() => {
        console.log('Old trips removed');
        // inserts new trip data
        return Trip.insertMany(trips);
    })
    .then(() => {
        console.log('Trips added to database');
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log('Error seeding database:', err);
        mongoose.disconnect();
    });
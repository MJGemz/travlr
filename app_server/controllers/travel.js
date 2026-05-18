const trips = require('../../data/trips.json');

// renders the travel page and sends trip data
const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        trips
    });
};

module.exports = {
    travel
};
const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        message: 'Welcome to Travlr'
    });
};

module.exports = {
    travel
};
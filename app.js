const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'hbs');

// Set views location
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register partials
hbs.registerPartials(path.join(__dirname, 'app_server/views/partials'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const travelRouter = require('./app_server/routes/index');
app.use('/', travelRouter);

// Start server
app.listen(port, () => {
  console.log(`Travlr app listening at http://localhost:${port}`);
});
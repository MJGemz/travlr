const express = require('express');
const path = require('path');
const hbs = require('hbs');

// database connection
const db = require('./app_server/db');
db.connect();

const app = express();
const port = 3000;

// view engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

hbs.registerPartials(
    path.join(__dirname, 'app_server/views/partials')
);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// existing website routes
const travelRouter = require('./app_server/routes/index');
app.use('/', travelRouter);

// API routes
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

// start server
app.listen(port, () => {
    console.log(`Travlr app listening at http://localhost:${port}`);
});
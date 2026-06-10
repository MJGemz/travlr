require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const passport = require('passport');

// database connection
const db = require('./app_server/db');
db.connect();

// passport strategies
require('./app_api/config/passport');
require('./app_api/config/jwt');

const app = express();
const port = 3000;

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// passport init
app.use(passport.initialize());

// CORS
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    next();
});

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
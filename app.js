const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

// tells Express to use Handlebars
app.set('view engine', 'hbs');

// points to the views folder
app.set('views', path.join(__dirname, 'app_server', 'views'));

// registers reusable partial files like header and footer
hbs.registerPartials(path.join(__dirname, 'app_server/views/partials'));

// allows CSS, images, and other static files to load
app.use(express.static(path.join(__dirname, 'public')));

// connects routes from index.js
const travelRouter = require('./app_server/routes/index');
app.use('/', travelRouter);

// starts the server on port 3000
app.listen(port, () => {
  console.log(`Travlr app listening at http://localhost:${port}`);
});
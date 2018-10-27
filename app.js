const express = require('express');
const app = express();
const env = require('./config/environment');
const port = env.port;
const expressLayouts = require('express-ejs-layouts');
const router = require('./config/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect(env.dbUri);
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.listen(port, () => console.log(`Listening for changes on port ${port}`));

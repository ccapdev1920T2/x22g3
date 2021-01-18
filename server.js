var port = 8080;
var express = require('express');
var app = express();
const hbs = require('express-handlebars').create({ extname: 'hbs', defaultLayout: 'main' });

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/animo-sys';
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

mongoose.connect(url, options, err => {
    if (err) throw err;
    console.log('connected at ' + url);
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// serve static files
app.use(express.static('public'));

// Routes
var indexRoute = require('./routes/index');
var cartRoute = require('./routes/cart');
var profileRoute = require('./routes/profile');
var preenlistmentRoute = require('./routes/preenlistment');
var enrollmentRoute = require('./routes/enrollment');
var degreeprocessRoute = require('./routes/degreeprocess');
var modRoute = require('./routes/mod');
var loginRoute = require('./routes/login');
var logoutRoute = require('./routes/logout');

app.use('/', indexRoute);
app.use('/home', indexRoute);
app.use('/cart', cartRoute);
app.use('/profile', profileRoute);
app.use('/preenlistment', preenlistmentRoute);
app.use('/enrollment', enrollmentRoute);
app.use('/degree-process', degreeprocessRoute);
app.use('/mod', modRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});

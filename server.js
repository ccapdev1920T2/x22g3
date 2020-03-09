var port = 8080;
var express = require('express');
var app = express();
const hbs = require('express-handlebars');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Routes
var indexController = require('./controllers/indexController');
var cartController = require('./controllers/cartController');
var preenlistmentController = require('./controllers/preenlistmentController');
var enrollmentController = require('./controllers/enrollmentController');
var degreeprocessController = require('./controllers/degreeprocessController');
var modController = require('./controllers/modController');


app.use('/', indexController);
app.use('/home', indexController);
app.use('/cart', cartController);
app.use('/preenlistment', preenlistmentController);
app.use('/enrollment', enrollmentController);
app.use('/degree-process', degreeprocessController);
app.use('/mod', modController);

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// serve static files
app.use(express.static('public'));



app.get('/login', (req, res) => {
    let view = (req.query.mod) ? 'login-mod' : 'login';
    res.render(view, {
        layout: 'sessions',
        addedStyles: ['session-styles'],
        title: 'Login | Animo.sys'
    });
});

app.post('/login', urlencodedParser, (req, res) => {
    let view = (req.query.mod) ? 'login-mod' : 'login';
    var data = req.body;
    var errMsg = '';
    if (!data.idNumber || !data.password) {
        errMsg = "Invalid ID Number/Password.";
    }


    res.render(view, {
        layout: 'sessions',
        addedStyles: ['session-styles'],
        title: 'Login | Animo.sys',
        data: data,
        errMsg: errMsg
    });
})



app.get('/profile', (req, res) => {
    res.render('profile', {
        addedStyles: ['profile-styles'],
        title: 'Profile | Animo.sys'
    });
});

app.get('/logout', (req, res) => {
    res.render('logout', {
        layout: 'sessions',
        addedStyles: ['session-styles'],
        title: 'Logout | Animo.sys'
    });
});





// Moderator routes


app.listen(port, () => {
    console.log('i love u ' + port);
})

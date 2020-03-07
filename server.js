var port = 8080;
var express = require('express');
var app = express();
const hbs = require('express-handlebars');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Routes
var indexController = require('./controllers/indexController');
var enrollmentController = require('./controllers/enrollmentController');


app.use('/', indexController);
app.use('/enrollment', enrollmentController);

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

app.get('/cart/:from?', (req, res) => {
    var from = req.params.from;
    var view;
    if (from == undefined) {
        view = 'cart';
    } else if (from == 'preenlistment') {
        view = 'cart_preenlistment';
    } else if (from == 'enrollment') {
        view = 'cart_enrollment';
    } else {
        view = '404';
    }

    if (view == '404') {
        res.status(404).render('404', {
            title: 'Page not found!',
            layout: false
        });
    } else {
        res.render(view, { title: 'Cart | Animo.sys' });
    }
});

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

app.get('/preenlistment', (req, res) => {
    res.render('preenlistment', {
        title: "Pre-enlistment | Animo.sys"
    });
})



// Moderator routes


app.listen(port, () => {
    console.log('i love u ' + port);
})

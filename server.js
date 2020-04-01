var port = 8080;
var express = require('express');
var app = express();
const hbs = require('express-handlebars');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Routes
var indexRoute = require('./routes/index');
var cartRoute = require('./routes/cart');
var profileRoute = require('./routes/profile');
var preenlistmentRoute = require('./routes/preenlistment');
var enrollmentRoute = require('./routes/enrollment');
var degreeprocessRoute = require('./routes/degreeprocess');
var modRoute = require('./routes/mod');
var loginRoute = require('./routes/login');

app.use('/', indexRoute);
app.use('/home', indexRoute);
app.use('/cart', cartRoute);
app.use('/profile', profileRoute);
app.use('/preenlistment', preenlistmentRoute);
app.use('/enrollment', enrollmentRoute);
app.use('/degree-process', degreeprocessRoute);
app.use('/mod', modRoute);
app.use('/login', loginRoute);


app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// serve static files
app.use(express.static('public'));



// app.get('/login', (req, res) => {
//     let view = (req.query.mod) ? 'login-mod' : 'login';
//     res.render(view, {
//         layout: 'sessions',
//         addedStyles: ['session-styles'],
//         title: 'Login | Animo.sys'
//     });
// });

// app.post('/login', urlencodedParser, (req, res) => {
//     let view = (req.query.mod) ? 'login-mod' : 'login';
//     var data = req.body;
//     var errMsg = '';
//     if (!data.idNumber || !data.password) {
//         errMsg = "Invalid ID Number/Password.";
//     }


//     res.render(view, {
//         layout: 'sessions',
//         addedStyles: ['session-styles'],
//         title: 'Login | Animo.sys',
//         data: data,
//         errMsg: errMsg
//     });
// })


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

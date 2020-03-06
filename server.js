var port = 8080;
var express = require('express');
var app = express();
const hbs = require('express-handlebars');

app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');

// serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Animo.sys' });
});

app.get('/login', (req, res) => {
    let view = (req.query.mod) ? 'login-mod' : 'login';
    res.render(view, {
        layout: 'sessions',
        addedStyles: ['session-styles'],
        title: 'Login | Animo.sys'
    });
});

app.get('/cart', (req, res) => {
    res.render('cart', { title: 'Cart | Animo.sys' });
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



// Moderator routes


app.listen(port, () => {
    console.log('i love u ' + port);
})

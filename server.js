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

app.get('/enrollment', (req, res) => {
    res.render('enrollment', {
        title: 'Enrollment | Animo.sys',
        addedStyles: ['enrollment-styles']
    });
})

// Moderator routes


app.listen(port, () => {
    console.log('i love u ' + port);
})

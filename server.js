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
    res.render('login', { title: 'Login | Animo.sys' });
});

app.listen(port, () => {
    console.log('i love u ' + port);
})

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('cart', {
        title: 'Home | Animo.sys'
    });

})

router.get('/:from?', (req, res) => {
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

module.exports = router;
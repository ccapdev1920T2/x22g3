var express = require('express');
var router = express.Router();

var preenlisted_courses_controller = require('../controllers/preenlisted_coursesController');
var enrolled_courses_controller = require('../controllers/enrolled_coursesController');


// TODO: /cart will redirect to either /cart/preenlistment or /cart/enrollment, whichever is active
router.get('/', (req, res) => {
    res.render('cart', {
        title: 'Cart | Animo.sys'
    });

});

router.get('/preenlistment', preenlisted_courses_controller.preenlisted_courses_detail);

router.get('/enrollment', enrolled_courses_controller.enrolled_courses_detail);

// router.get('/:from?', (req, res) => {
//     var from = req.params.from;
//     var view;
//     if (from == undefined) {
//         view = 'cart';
//     } else if (from == 'preenlistment') {
//         view = 'cart_preenlistment';
//     } else if (from == 'enrollment') {
//         view = 'cart_enrollment';
//     } else {
//         view = '404';
//     }

//     if (view == '404') {
//         res.status(404).render('404', {
//             title: 'Page not found!',
//             layout: false
//         });
//     } else {
//         res.render(view, { title: 'Cart | Animo.sys' });
//     }
// });

module.exports = router;
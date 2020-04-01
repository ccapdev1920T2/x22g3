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

router.get('/preenlistment', preenlisted_courses_controller.preenlisted_courses_cart);

// TODO: router.post('/preenlistment') from /preenlistment route


router.get('/enrollment', enrolled_courses_controller.enrolled_courses_detail);


module.exports = router;
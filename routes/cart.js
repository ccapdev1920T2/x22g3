var express = require("express");
var router = express.Router();

var cart_controller = require("../controllers/cartController");

// TODO: /cart will redirect to either /cart/preenlistment or /cart/enrollment, whichever is active
router.get("/", cart_controller.cart_landing_page_get);

router.get("/preenlistment", cart_controller.cart_preenlisted_courses_list_get);

// TODO: router.post('/preenlistment') from /preenlistment route

router.get("/enrollment", cart_controller.cart_enrolled_courses_list_get);

module.exports = router;

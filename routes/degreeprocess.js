var express = require("express");
var router = express.Router();

var degree_process_controller = require("../controllers/degreeProcessController");

router.get("/", degree_process_controller.degreeprocess_landing_page_get);

module.exports = router;

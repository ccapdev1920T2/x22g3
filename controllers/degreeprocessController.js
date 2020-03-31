var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('degree-process', {
        title: "Degree Process | Animo.sys"
    });
})

module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('preenlistment', {
        title: "Pre-enlistment | Animo.sys"
    });
})

module.exports = router;
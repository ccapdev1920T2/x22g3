const express = require("express");
const {
    sendDocumentRequest
} = require("../../controllers/api/documentApiController");
const router = express.Router();

router.post('/new', sendDocumentRequest);

module.exports = router;
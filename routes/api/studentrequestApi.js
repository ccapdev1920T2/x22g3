const express = require("express");
const {
  postRequest
} = require("../../controllers/api/studentrequestApiController");
const {
    validate,
  requestClassValidator
  
} = require("../../helpers/validation-helper");
const router = express.Router();
// /api/student-requests/test
router.get('/test', (req, res) => {res.send('test')});
router.post("/new", validate(requestClassValidator), postRequest);

module.exports = router;

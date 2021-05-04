const express = require("express");
const {
<<<<<<< Updated upstream
=======
  postStudent,
  getAllStudents,
  disableAccess,
  enableAccess,
  postDrop
} = require("../../controllers/api/studentApiController");
const {
>>>>>>> Stashed changes
  validate,
  addStudentValidator,
  
} = require("../../helpers/validation-helper");
const router = express.Router();

<<<<<<< Updated upstream
router.post("/", validate(addStudentValidator), (req, res) => {
  res.send(req.originalUrl);
});
=======
router.get("/", getAllStudents);

router.post("/", validate(addStudentValidator), postStudent);

router.post("/:studentId/disable-access", disableAccess);

router.post("/:studentId/enable-access", enableAccess);

router.post("/:studentId/courses/:courseId/drop", postDrop);

>>>>>>> Stashed changes
module.exports = router;

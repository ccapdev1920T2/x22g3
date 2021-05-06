const { sendCreatePasswordMail } = require("../../helpers/mailing-helper");
const Student = require("../../models/Student");

exports.getAllStudents = async (req, res) => {
  try {
    let options = req.query || {};
    const students = await Student.find(options);

    return res.send(students);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

exports.postStudent = async (req, res) => {
  try {
    const { first, middle, last, ...student } = req.body;
    student.name = { first, middle, last };

    const saved = await Student.create(student);

    console.log(saved);

    await sendCreatePasswordMail(saved, req.protocol, req.get("host"));

    res.send(saved);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

exports.disableAccess = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);

    if (!student) return res.status(404).send({ message: "Not found" });

    student.hasAccess = false;
    await student.save();

    return res.send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

exports.enableAccess = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);

    if (!student) return res.status(404).send({ message: "Not found" });

    student.hasAccess = true;
    await student.save();

    return res.send(student);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error });
  }
};

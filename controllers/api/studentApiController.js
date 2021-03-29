const { sendCreatePasswordMail } = require("../../helpers/mailing-helper");
const Student = require("../../models/Student");

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

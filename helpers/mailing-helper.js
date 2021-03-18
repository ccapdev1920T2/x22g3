const jwt = require("jsonwebtoken");

const transporter = require("../config/nodemailer-config");

exports.sendCreatePasswordMail = async (student, protocol, host) => {
  try {
    const token = jwt.sign({ studentId: student._id }, process.env.JWT_KEY);

    await transporter.sendMail({
      from: "animosys022@gmail.com",
      to: student.email,
      subject: "Animo.sys - Finish your account registration",
      html: `
      Hello ${student.name.first},
      <br><br>
      To fully verify your Animo.sys account, please create your desired password
      through this <a href="${protocol}://${host}/register/student/${token}">link</a>.
      `,
    });
  } catch (error) {
    console.log(error);
  }
};

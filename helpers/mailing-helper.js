const transporter = require("../config/nodemailer-config");

exports.sendCreatePasswordMail = async (student) => {
  try {
    await transporter.sendMail({
      from: "animosys022@gmail.com",
      to: student.email,
      subject: "Animo.sys - Finish your account registration",
      html: `
      Hello ${student.name.first}, <br>
      To fully verify your Animo.sys account, please create your desired password
      through this <a href=${"/"}>link</a>.
      `,
    });
  } catch (error) {
    console.log(error);
  }
};
